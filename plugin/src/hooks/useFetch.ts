/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { ExceptionHandlerContext } from "../contexts/ExceptionHandlerContext";

const useFetch = (url: RequestInfo | URL, body?: Record<string, any>) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const context = useContext(ExceptionHandlerContext);
  const { error, handleException } = context;
  const [reqStatusCode, setReqStatusCode] = useState<null | number>(null);
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
      setReqStatusCode(req.status);
      const res = await req.json();
      setData(res.lista);
      if (res.respuesta !== "OK") {
        throw new Error(res.mensaje);
      }
      handleException({
        message: res.mensaje,
        name: "SUCCESS",
        statusCode: req.status,
      });
    } catch (err) {
      if (err instanceof Error) {
        handleException({
          message: err.message,
          error: err.stack,
          statusCode: reqStatusCode,
          name: "ERROR",
        });
      }
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
