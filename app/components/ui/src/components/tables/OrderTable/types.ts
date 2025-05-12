import wooOrdersMock from "./../../../mocks/OrderTable/wooOrderMock.json";
import shopifyOrdersMock from "./../../../mocks/OrderTable/shopifyOrderMock.json";
import { ShopNameType } from "../../../hooks/usePolling/types";
export type WoocomerceOrdersType = typeof wooOrdersMock;
export type ShopifyOrdersType = {orders: typeof shopifyOrdersMock};
export type OrderTableType = {
  headers: string[];
  data: WoocomerceOrdersType | ShopifyOrdersType;
  shopName: ShopNameType;
};

export type WoocomerceOrderType = {
  name: number;
  created_at: string;
  customer: {
    first_name: string;
    last_name: string;
    city: string;
    country: string;
    email: string;
    phone: string;
    postcode: string;
    state: string;
    address_1: string;
    address_2: string;
  };
  seller: {
    shop_name: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode?: string;
    country: string;
    email: string;
    phone: string;
  };
  sub_total_price: number;
  total_price: string;
  financial_status: string;
  fulfillment_status: string;
  fulfillable_quantity: number;
  line_items: [
    {
      fulfillable_quantity: number;
    }
  ];
  products?: {
    weight: number;
    width: number;
    height: number;
    length: number;
  }[];
  payment_method: string;
};
export type ShopifyOrderType = {
  name: number;
  created_at: string;
  customer: {
    first_name: string;
    last_name: string;
    city: string;
    country: string;
    email: string;
    phone: string;
    postcode: string;
    state: string;
    address_1: string;
    address_2: string;
  };
  seller: {
    shop_name: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode?: string;
    country: string;
    email: string;
    phone: string;
  };
  sub_total_price: number;
  total_price: string;
  financial_status: string;
  fulfillment_status: string;
  fulfillable_quantity: number;
  line_items: [
    {
      fulfillable_quantity: number;
    }
  ];
  products?: {
    weight: number;
    width: number;
    height: number;
    length: number;
  }[];
  payment_method: string;
};