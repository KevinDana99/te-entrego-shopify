import { LogoContainer } from "../wrapper/styled";
import Logo from "../components/assets/Logo";
import { Route, Router } from "../routes";
import Orders from "./Orders";
import Shipments from "./Shipments";
import { Container, Title } from "./styled";
import Config from "./Config";
import useViews from "./hooks/useViews";
import ShipmentStatus from "./ShipmentStatus";
import ShipmentMethod from "./ShipmentMethod";
import { ShopNameType } from "../hooks/usePolling/types";
import { StoreType } from "../wrapper";

const Views = ({
  shopName,
  store,
}: {
  shopName: ShopNameType;
  store?: StoreType;
}) => {
  const { path } = useViews();
  return (
    <Container>
      <Title>{path}</Title>
      <LogoContainer>
        <Logo size={121} />
      </LogoContainer>
      <Router>
        <Route path="orders">
          <Orders shopName={shopName} store={store} />
        </Route>
        <Route path="shipments">
          <Shipments />
        </Route>
        <Route path="shipment-method">
          <ShipmentMethod />
        </Route>
        <Route path="shipment-status">
          <ShipmentStatus />
        </Route>
        <Route path="config">
          <Config />
        </Route>
      </Router>
    </Container>
  );
};

export default Views;
