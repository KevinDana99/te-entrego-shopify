import { useContext, useEffect, useState } from "react";
import { RouterContext, RouterProvider } from "./context/RouterContext";
import useRouter from "./context/hook/useRouter";
import { RoutesType } from "./types";

export const Router = ({ children }: { children: JSX.Element[] }) => {
  const { currentPath } = useContext(RouterContext);
  const selectedRoute = children.find(
    (child) => child.props.path === currentPath
  );
  return selectedRoute;
};

export const Route = ({
  children,
}: {
  path: RoutesType;
  children: JSX.Element;
}) => {
  return children;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Link = (props: any) => {
  const { path, className, children } = props;
  const { navigate } = useRouter();
  return (
    <a
      className={className}
      onClick={() => {
        navigate(path, props);
      }}
    >
      {children}
    </a>
  );
};

const AppRouter = ({
  children,
  defaultPath,
}: {
  children: JSX.Element;
  defaultPath: RoutesType;
}) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  if (children) {
    return (
      client && (
        <RouterProvider defaultPath={defaultPath}>{children}</RouterProvider>
      )
    );
  }
};

export default AppRouter;
