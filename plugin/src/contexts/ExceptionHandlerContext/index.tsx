import type { ReactNode } from "react";
import { createContext, useEffect } from "react";
import useExceptionHandler from "../../hooks/useExceptionHandler";
import type { ExceptionHandlerContextInterface } from "../../hooks/useExceptionHandler/types";
export const ExceptionHandlerContext = createContext(
  {} as ExceptionHandlerContextInterface
);

export const ExceptionHandlerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const contextProps = useExceptionHandler();
  const { error, handleException, message, statusCode } = contextProps;

  useEffect(() => {
    console.log({ ExceptionHandler: { error, message, statusCode } });
  }, [error, message, statusCode]);
  return (
    <ExceptionHandlerContext.Provider
      value={{ error, handleException, message, statusCode }}
    >
      {children}
    </ExceptionHandlerContext.Provider>
  );
};
