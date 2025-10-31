import shipmentsMock from "./../../../mocks/ShipmentTable/index.json";
export type ShipmentsType = typeof shipmentsMock;
export type ShipmentTableType = {
  headers: string[];
  data: ShipmentsType;
  shipmentComponentRef?: any;
};
