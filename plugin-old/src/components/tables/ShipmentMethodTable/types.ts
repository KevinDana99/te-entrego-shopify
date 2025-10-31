export const shipmentMethodMock = [
  {
    operator: "Te-Entrego",
    price: "432432",
    time: "1",
    img: null,
  },
  {
    operator: "Coordinadora",
    price: "432432",
    time: "2",
    img: "./assets/coordinadora.png",
  },
  {
    operator: "TCC",
    price: "34243",
    time: "2",
    img: "./assets/tcc.png",
  },
  {
    operator: "Envia",
    price: "423243",
    time: "2",
    img: "./assets/envia.png",
  },
];
export type ShipmentsType = typeof shipmentMethodMock;
export type ShipmentTableType = {
  headers: string[];
};
