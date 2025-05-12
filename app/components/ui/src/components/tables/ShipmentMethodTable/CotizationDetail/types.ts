export type CotizationResponseItemType = {
  codigo: string;
  nombre: string;
  logo: string;
  condiciones: string;
  resultados: {
    tarifa: string;
    flete: number;
    flete_variable: string;
    total: number;
    totalpesofacturado: string;
    tipotarifa: string;
    comisionrecaudo: string;
    netorecaudo: number;
    comisionce: number;
    respuesta: string;
    mensaje: string;
    trama: string;
    adicionales: string;
    por_com_fran: number;
    valor_com_fran: number;
    btn: string;
    xml: string;
    cobrarcliente: number;
  };
};

export type CotizationResponseType = CotizationResponseItemType[];
