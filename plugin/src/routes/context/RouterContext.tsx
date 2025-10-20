/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useState } from "react";
import { RoutesType } from "../types";

type RouterContextType = {
  currentPath: RoutesType;
  navigate: (path: RoutesType, props?: any) => void;
  currentProps?: any;
};
// @ts-expect-error: valor inicial null hasta que se establezca en el Provider
export const RouterContext = createContext<RouterContextType>(null);

export const RouterProvider = ({
  children,
  defaultPath,
}: {
  children?: ReactNode;
  defaultPath: RoutesType;
}) => {
  const [currentPath, setCurrentPath] = useState(defaultPath);
  const [currentProps, setCurrentProps] = useState(null);

  const navigate = (path: RoutesType, props: any) => {
    setCurrentPath(path);
    setCurrentProps(props);
  };
  return (
    <RouterContext.Provider value={{ currentPath, navigate, currentProps }}>
      {children}
    </RouterContext.Provider>
  );
};
