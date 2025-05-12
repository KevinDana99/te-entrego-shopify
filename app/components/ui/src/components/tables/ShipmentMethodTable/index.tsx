import useRouter from "../../../routes/context/hook/useRouter";
import Logo from "../../assets/Logo";
import { Head, Table, Th, Container, Block } from "../Table/styled";
import CotizationDetail from "./CotizationDetail";
import useShipmentMethod from "./hooks/useShipmentMethod";
import { ShipmentTableType } from "./types";

const ShipmentMethodTable = ({ headers }: ShipmentTableType) => {
  const { navigate, currentProps } = useRouter();
  const {
    handleSelectedMethod,
    handleCreateShipment,
    selectedMethod,
    customOrder,
    preOrder,
    loading,
    error,
  } = useShipmentMethod(currentProps);

  const handleRedirection = async () => {
    await handleCreateShipment();
    navigate("shipments", { refetch: true });
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Logo size={250} />
      </div>
    );
  }

  if (error) {
    return `${JSON.stringify(error)}`;
  }
  return (
    <>
      <Container>
        <Block> </Block>
        <Table>
          <Head>
            <tr>
              {headers.map((head) => (
                <Th>{head}</Th>
              ))}
            </tr>
          </Head>
          {customOrder && (
            <CotizationDetail
              preOrder={preOrder}
              customOrder={customOrder}
              handleSelectedMethod={handleSelectedMethod}
              selectedMethod={selectedMethod}
            />
          )}
        </Table>
      </Container>

      <button
        style={{
          alignSelf: "flex-end",
          marginTop: 40,
          background: "#59b6e7",
          outline: "none",
        }}
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          confirm("¿Estas segur@ que deseas confirmar este envio?")
            ? handleRedirection()
            : console.log("no send");
        }}
      >
        Generar envio
      </button>
    </>
  );
};

export default ShipmentMethodTable;
