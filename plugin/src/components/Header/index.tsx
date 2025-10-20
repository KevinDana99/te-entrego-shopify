import { Container } from "./styled";
import { Link } from "../../routes";

const Header = () => {
  return (
    <Container>
      <Link path="shipments">
        <button style={{ margin: 3, background: "#59b6e7" }}>Envios</button>
      </Link>
      <Link path="orders">
        <button style={{ margin: 3, background: "#59b6e7" }}>Pedidos</button>
      </Link>
    </Container>
  );
};

export default Header;
