import DisabledShipmentStatus from "../../components/assets/icons/DisabledShipmentStatus";
import EnableShipmentStatus from "../../components/assets/icons/EnableShipmentStatus";
import InitialShipmentStatus from "../../components/assets/icons/InitialShipmentStatus";
import useRouter from "../../routes/context/hook/useRouter";
import { Card, Container, Detail, Divider, Status, WrapperImg } from "./styled";

const ShipmentStatus = () => {
  const { currentProps } = useRouter();
  const shipment = currentProps.shipmentData;
  return (
    <Container>
      <Card>
        <WrapperImg>
          <InitialShipmentStatus />
        </WrapperImg>
        <Status>en reparto</Status>
        <Detail>
          <b>Estado:</b> <Status> en reparto</Status>
        </Detail>
        {shipment.fecha}
      </Card>
      <Divider />
      <Card>
        <WrapperImg>
          {shipment.estado === "TERMINAL DESTINO" ||
          shipment.estado === "ENTREGADA" ||
          shipment.estado === "A RECIBIR POR COORDINADORA" ||
          shipment.estado === "EN TRANSPORTE" ? (
            <EnableShipmentStatus />
          ) : (
            <DisabledShipmentStatus />
          )}
        </WrapperImg>
        <Status>en terminal de destino</Status>
        <Detail>
          <b>Estado:</b> <Status> en terminal de destino</Status>
        </Detail>
        {shipment.fecha}
      </Card>
      <Divider />
      <Card>
        <WrapperImg>
          {shipment.estado === "EN TRANSPORTE" ||
          shipment.estado === "A RECIBIR POR COORDINADORA" ||
          shipment.estado === "ENTREGADA" ? (
            <EnableShipmentStatus />
          ) : (
            <DisabledShipmentStatus />
          )}
        </WrapperImg>
        <Status>en transporte</Status>
        <Detail>
          <b>Estado:</b> <Status> en transporte</Status>
        </Detail>
        {shipment.fecha}
      </Card>
      <Divider />
      <Card>
        <WrapperImg>
          {shipment.estado === "ENTREGADA" ? (
            <EnableShipmentStatus />
          ) : (
            <DisabledShipmentStatus />
          )}
        </WrapperImg>
        <Status>entregado</Status>
        <Detail style={{ color: "#60789A" }}>Llego tu pedido</Detail>
      </Card>
    </Container>
  );
};

export default ShipmentStatus;
