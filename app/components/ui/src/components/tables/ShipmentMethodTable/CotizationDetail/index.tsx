import { Body, Td } from "../../Table/styled";
import { OperatorContainer } from "../styled";
import { CustomOrderType, CustomShipmentOrderType } from "../hooks/types";
import { CotizationResponseType } from "./types";
import useCotizationDetail from "./hooks/useCotizationDetail";
import { WoocomerceOrderType } from "../../OrderTable/types";
import formatCurrency from "../../../../utils/formatCurrency";
const CotizationDetail = ({
  customOrder,
  handleSelectedMethod,
  selectedMethod,
  preOrder,
}: {
  selectedMethod: number | null;
  handleSelectedMethod: (
    index: number,
    currentOrder: CustomShipmentOrderType
  ) => void;
  customOrder: CustomOrderType;
  preOrder: WoocomerceOrderType;
}) => {
  const { data, error, loading, handleCreateShipmentOrder } =
    useCotizationDetail(preOrder, customOrder, handleSelectedMethod);

  if (loading) {
    return <>cargando...</>;
  }
  if (error) {
    return <>error {console.log(error)}</>;
  }

  const cotizationData = data as CotizationResponseType;

  return (
    <Body>
      {cotizationData?.map((element, index) => {
        const active = index % 2 == 0 ? true : false;
        return (
        
            <tr>
              <Td active={active}>
                <OperatorContainer>
                  {element.codigo === "9" ? (
                    <img
                      width={150}
                      src={`https://te-entrego.com/admin-assets/images/logo_registro.svg`}
                    />
                  ) : (
                    <img
                      width={150}
                      src={`https://te-entrego.com/teadminbeta/public/assets/operadores/${element.logo}`}
                    />
                  )}
                </OperatorContainer>
              </Td>
              <Td active={active}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div>Flete: {formatCurrency(element?.resultados.total)}</div>
                  <div>
                    Logística Recaudo:{" "}
                    {formatCurrency(element?.resultados.comisionrecaudo)}
                  </div>
                  <div>
                    Flete total:{" "}
                    {formatCurrency(element?.resultados.cobrarcliente)}
                  </div>
                  <div>
                    Neto Recaudo:{" "}
                    {formatCurrency(element?.resultados.netorecaudo)}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${element?.resultados.adicionales}`,
                    }}
                  ></div>
                </div>
              </Td>
              <Td active={active}>
                {parseInt(element.codigo) === selectedMethod ? (
                  <button
                    style={{
                      margin: 3,
                      background: "#ffffff",
                      color: "#59b6e7",
                      border: "2px solid #59b6e7",
                      outline: "none",
                    }}
                  >
                    Seleccionado
                  </button>
                ) : (
                  <button
                    style={{
                      margin: 3,
                      background: "#59b6e7",
                      outline: "none",
                    }}
                    onClick={() =>
                      handleCreateShipmentOrder(
                        parseInt(element.codigo),
                        element
                      )
                    }
                  >
                    Seleccionar
                  </button>
                )}
              </Td>
            </tr>

        );
      })}
    </Body>
  );
};

export default CotizationDetail;
