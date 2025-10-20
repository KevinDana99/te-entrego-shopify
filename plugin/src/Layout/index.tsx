import { Container } from "./styled";

const Layout = ({ children }: { children: JSX.Element[] }) => {
  return <Container>{children}</Container>;
};

export default Layout;
