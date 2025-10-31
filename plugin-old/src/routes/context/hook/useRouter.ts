import { useContext } from "react";
import { RouterContext } from "../RouterContext";

const useRouter = () => {
  const params = useContext(RouterContext);
  return params;
};

export default useRouter;
