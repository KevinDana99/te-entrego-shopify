import { useEffect } from "react";
import useFetch from "../../../../../hooks/useFetch";
import { WoocomerceOrderType } from "../../../OrderTable/types";
import { CustomOrderType, CustomShipmentOrderType } from "../../hooks/types";
import { CotizationResponseItemType } from "../types";
import { ConfigType } from "../../../../../views/Config/hooks/useConfig";

const useCotizationDetail = (
  preOrder: WoocomerceOrderType,
  customOrder: CustomOrderType,
  handleSelectedMethod: (
    index: number,
    currentOrder: CustomShipmentOrderType
  ) => void
) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const storedConfig = localStorage.getItem("config");
  const config: ConfigType = storedConfig && JSON.parse(storedConfig);
  const { loading, data, error } = useFetch(
    "https://te-entrego.com/teadminbeta/public/api/calcular_envio",
    {
      ...customOrder,
    }
  );

  const {
    accesoapi,
    alto,
    ancho,
    codigocliente,
    dest_comision,
    dest_flete,
    destino,
    kilos,
    largo,
    llaveseguridad,
    origen,
    unidades,
    vlrdeclarado,
    vlrecaudo,
  } = customOrder;
  const { customer } = preOrder;

  const shipmentOrder = {
    accesoapi,
    alto: alto,
    ancho: ancho,
    codigocliente,
    dest_comision,
    dest_flete,
    destino,
    kilos: parseInt(`${kilos}`),
    largo: largo,
    llaveseguridad,
    origen,
    unidades,
    vlrdeclarado,
    vlrecaudo,
    celulard: customer.phone ?? 2804675399,
    correod: customer.email,
    dird: customer.address_1,
    nombred: `${customer.first_name} ${customer.last_name}`,
    nombrer: customer.first_name,
    apellr: customer.last_name,
    celularr: customer.phone ?? 2804675399,
    correor: customer.email,
    dirr: customer.address_1,
    identid: "232323213231",
    identir: "432214343123",
    obs: "No hay observaciones",
    adi: "No hay observaciones",
    fecha_recogida: `${year}-${month}-${day}`,
    tipoacceso: "api",
  };

  const handleCreateShipmentOrder = (
    index: number,
    element: CotizationResponseItemType
  ) => {
    handleSelectedMethod(index, { ...shipmentOrder, operador: element.codigo });
  };

  const handleLoadConfig = () => {
    const operator = config.operator ?? "9";
    handleSelectedMethod(parseInt(operator), {
      ...shipmentOrder,
      operador: operator,
    });
  };

  useEffect(() => {
    handleLoadConfig();
  }, [customOrder]);
  return { loading, data, error, customOrder, handleCreateShipmentOrder };
};

export default useCotizationDetail;
