import { useState } from "react";
import type { ExceptionHandlerType } from "./types";

const useExceptionHandler = () => {
  const [message, setMessage] = useState<ExceptionHandlerType["message"]>(null);
  const [error, setError] = useState<ExceptionHandlerType["error"] | null>(
    null
  );
  const [statusCode, setStatusCode] =
    useState<ExceptionHandlerType["statusCode"]>(null);

  const handleException = (exception: ExceptionHandlerType) => {
    const { message, name, error, statusCode } = exception;
    const cutErrorChain = error?.split("at")[0];
    if (name !== "SUCCESS") {
      setError(cutErrorChain);
      setMessage(message);
      setStatusCode(statusCode);
      console.error(exception);
    } else {
      setError(null);
      setStatusCode(statusCode);
      setMessage(message);
      console.info(exception);
    }
  };
  return {
    handleException,
    message,
    error,
    statusCode,
  };
};

export default useExceptionHandler;
