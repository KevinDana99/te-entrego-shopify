import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { WoocomerceOrderType } from "../../OrderTable/types";
import { ConfigType } from "../../../../views/Config/hooks/useConfig";
import {
  CustomOrderType,
  CustomShipmentOrderType,
  LocationResponseType,
} from "./types";

const useShipmentMethod = (currentProps: { order: WoocomerceOrderType }) => {
  const storedConfig = localStorage.getItem("config");
  const config: ConfigType = storedConfig && JSON.parse(storedConfig);
  const order = currentProps.order;
  const city = order.customer.city;
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);
  const [shipmentOrder, setShipmentOrder] =
    useState<CustomShipmentOrderType | null>(null);
  const [customOrder, setCustomOrder] = useState<CustomOrderType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);
  const handleSelectedMethod = (
    index: number,
    currentOrder: CustomShipmentOrderType
  ) => {
    setSelectedMethod(index);
    setShipmentOrder(currentOrder);
  };
  //"https://te-entrego.com/teadminbeta/public/api/generarenviov2",
  //https://te-entrego.com/teadmin/public/api/generar_envio
  const handleCreateShipment = async () => {
    try {
      setLoading(true);
      await fetch(
        "https://te-entrego.com/teadminbeta/public/api/generarenviov2",
        {
          method: "POST",
          body: JSON.stringify(shipmentOrder),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGetOriginLocation = useFetch(
    "https://te-entrego.com/teadminbeta/public/api/ciudades",
    {
      codigocliente: config.client_code,
      accesoapi: config.public_key,
      llaveseguridad: config.secret_key,
      paramb: city,
    }
  );

  const handleGetDestinationLocation = useFetch(
    "https://te-entrego.com/teadminbeta/public/api/ciudades",
    {
      codigocliente: config.client_code,
      accesoapi: config.public_key,
      llaveseguridad: config.secret_key,
      paramb: city,
    }
  );
  const originLocation = handleGetOriginLocation.data as LocationResponseType;
  const destinationLocation =
    handleGetDestinationLocation.data as LocationResponseType;

  const handleGetSizesProducts = () => {
    const result = order?.products?.reduce(
      (accumulator, product) => {
        accumulator.weight += product.weight;
        if (product.width > accumulator.width) {
          accumulator.width = product.width;
        }
        if (product.height > accumulator.height) {
          accumulator.height = product.height;
        }
        if (product.length > accumulator.length) {
          accumulator.length = product.length;
        }
        return accumulator;
      },
      { weight: 0, width: 0, height: 0, length: 0 }
    );
    return {
      weight: result?.weight,
      width: result?.width,
      height: result?.height,
      length: result?.length,
    };
  };

  const { height, length, weight, width } = handleGetSizesProducts();

  const handleSetCustomOrder = () => {
    console.log({ order });
    setCustomOrder({
      origen: originLocation[0].codigodanelargo,
      destino: destinationLocation[0].codigodanelargo,
      unidades: order.line_items[0].fulfillable_quantity,
      kilos: parseInt(`${weight}`) || 1,
      ancho: parseInt(`${width}`) || 1,
      alto: parseInt(`${height}`) || 1,
      largo: parseInt(`${length}`) || 1,
      vlrdeclarado: parseInt(`${order.total_price}`) * 2,
      vlrecaudo:
        order.payment_method !== "cod" ? 0 : parseInt(order.sub_total_price),
      dest_flete: order.payment_method === "cod" ? 1 : 0,
      dest_comision: order.payment_method === "cod" ? 1 : 0,
      operador: "",
      codigocliente: config.client_code,
      accesoapi: config.public_key,
      llaveseguridad: config.secret_key,
    });
  };
  useEffect(() => {
    if (originLocation.length !== 0 && destinationLocation.length !== 0) {
      handleSetCustomOrder();
    }
  }, [originLocation, destinationLocation]);

  return {
    selectedMethod,
    shipmentOrder,
    customOrder,
    preOrder: order,
    loading,
    error,
    handleSelectedMethod,
    handleCreateShipment,
  };
};

export default useShipmentMethod;
