import { useEffect, useState } from "react";
import { UsePollingType } from "./types";
import handleGetOrders from "./functions/handleGetOrders";
import { ConfigType } from "../../views/Config/hooks/useConfig";
import { orderErrors } from "./mocks/errors";

const TIME_INTERVAL_REQUEST = 8000;

const usePolling = ({
  time = TIME_INTERVAL_REQUEST,
  shopName = "woocommerce",
  store,
}: UsePollingType) => {
  const config: ConfigType = JSON.parse(localStorage.getItem("config") ?? "");
  const PUBLIC_KEY = config.platform_public_key;
  const SECRET_KEY = config.platform_secret_key;
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const selectedShop = handleGetOrders({
    shopName,
    store,
    publicKey: PUBLIC_KEY,
    secretKey: SECRET_KEY,
  });

  const origin = selectedShop.url;

  const handleDataChanges = async () => {
    try {
      const req = await fetch(origin, {
        method: "GET",
      });
      const res = await req.json();
      if (!res.error) {
        setData(res);
      } else {
        if (orderErrors["authorization-error"].error === res.message) {
          setError(orderErrors["authorization-error"].message);
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleDataChanges();
    const interval = setInterval(handleDataChanges, time);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};

export default usePolling;
