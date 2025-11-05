import type { ReactNode } from "react";
import { createContext } from "react";
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
  const { error, handleException, message, statusCode } = useExceptionHandler();

  return (
    <ExceptionHandlerContext.Provider
      value={{ error, handleException, message, statusCode }}
    >
      {children}
    </ExceptionHandlerContext.Provider>
  );
};
