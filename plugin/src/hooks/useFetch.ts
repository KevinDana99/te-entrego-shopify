/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const useFetch = (url: RequestInfo | URL, body?: Record<string, any>) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<null | unknown>(null);
  const [loading, setLoading] = useState(false);
  const handleRequest = async () => {
    setLoading(true);
    try {
      const req = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const res = await req.json();
      setData(res.lista);
      if (res.respuesta !== "OK") {
        setError(res.mensaje);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefetch = () => {
    handleRequest();
  };
  useEffect(() => {
    handleRequest();
  }, []);

  return { error, loading, data, handleRefetch };
};

export default useFetch;
