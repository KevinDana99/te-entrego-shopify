import { createContext, ReactNode } from "react";
import useExceptionHandler from "../../hooks/useExceptionHandler";
import { ExceptionHandlerContextInterface } from "../../hooks/useExceptionHandler/types";
export const ExceptionHandlerContext =
  createContext<ExceptionHandlerContextInterface | null>(null);

export const ExceptionHandlerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const props = useExceptionHandler();
  return (
    <ExceptionHandlerContext.Provider value={props}>
      {children}
    </ExceptionHandlerContext.Provider>
  );
};
/*
const ComponentOther = async () => {
  const { handleException } = useExceptionHandler();

  try {
    const req = await fetch("api");
    const res = await req.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
*/
