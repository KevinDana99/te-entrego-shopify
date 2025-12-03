import { useContext, useEffect, useState } from "react";
import { UsePollingType } from "./types";
import handleGetOrders from "./functions/handleGetOrders";
import { ConfigType } from "../../views/Config/hooks/useConfig";
import { orderErrors } from "./mocks/errors";
import { ExceptionHandlerContext } from "../../contexts/ExceptionHandlerContext";

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
  const { error, handleException } = useContext(ExceptionHandlerContext);
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

      try {
        const res = await req.json();

        if (!res.error) {
          setData(res);
        } else {
          if (orderErrors["authorization-error"].error === res.message) {
            throw new Error(orderErrors["authorization-error"].message);
          }
        }
      } catch {
        throw new Error("No se pudo conectar con las ordenes de tu tienda");
      }
    } catch (err) {
      if (err instanceof Error) {
        handleException({
          message: err.message,
          error: err.stack,
          statusCode: null,
          name: "ERROR",
        });
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
