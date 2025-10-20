export type LocationResponseType = {
  codigodanelargo: string;
  poblacion: string;
  municipio: string;
}[];

export interface CustomShipmentOrderType {
  origen: string;
  destino: string;
  unidades: number;
  kilos: number;
  vlrdeclarado: number;
  vlrecaudo: number;
  ancho: number;
  alto: number;
  largo: number;
  dest_flete: number;
  dest_comision: number;
  operador: string;
  identir: string;
  nombrer: string;
  apellr: string;
  correor: string;
  celularr: string;
  dirr: string;
  nombred: string;
  identid: string;
  correod: string;
  celulard: string;
  dird: string;
  obs: string;
  adi: string;
  fecha_recogida?: string;
  codigocliente: string;
  accesoapi: string;
  llaveseguridad: string;
}

export interface CustomOrderType {
  origen: string;
  destino: string;
  unidades: number;
  kilos: number;
  ancho: number;
  alto: number;
  largo: number;
  vlrdeclarado: number;
  vlrecaudo: number;
  dest_flete: 0 | 1;
  dest_comision: 0 | 1;
  operador: string;
  codigocliente: string;
  accesoapi: string;
  llaveseguridad: string;
}
