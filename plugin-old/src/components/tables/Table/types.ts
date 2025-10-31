import { WoocomerceOrderType, ShopifyOrderType } from "../OrderTable/types";
import { ShipmentsType } from "../ShipmentTable/types";

export type TableType = {
  headers: string[];
  data: WoocomerceOrderType | ShopifyOrderType | ShipmentsType;
};
