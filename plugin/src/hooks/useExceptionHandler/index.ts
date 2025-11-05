import { useState } from "react";
import type { UseExceptionHandlerType } from "./types";

const useExceptionHandler = () => {
  const [message, setMessage] =
    useState<UseExceptionHandlerType["message"]>(null);
  const [error, setError] = useState<UseExceptionHandlerType["error"]>(null);
  const [statusCode, setStatusCode] =
    useState<UseExceptionHandlerType["statusCode"]>(null);
  const handleException = (exception: UseExceptionHandlerType) => {
    const { statusCode, error, message } = exception;
    setError(error);
    setMessage(message);
    setStatusCode(statusCode);
  };
  return {
    handleException,
    message,
    error,
    statusCode,
  };
};

export default useExceptionHandler;
