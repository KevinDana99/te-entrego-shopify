import { StoreType } from "../../../wrapper";
import { ShopNameType } from "../types";

const handleGetOrders = ({
  shopName,
  store,
}: {
  shopName: ShopNameType;
  publicKey?: string;
  secretKey?: string;
  store?: StoreType;
}) => {
  const handleResolveUriOrders = () => {
    const uri = window.location.href;
    const splitUri = uri.split("/");
    const removeParams = splitUri.indexOf("wp-admin");
    splitUri.splice(removeParams, splitUri.length);
    const newUrl = splitUri.join("/");
    return newUrl;
  };
  const WOO_ORIGIN = handleResolveUriOrders();
  const WOOCOMERCE_URL_GET_ORDERS = `${WOO_ORIGIN}/wp-json/woo/v1/orders`;
  const SHOPIFY_URL_GET_ORDERS = `/api/orders?shop=${store?.shop}&accessToken=${store?.accessToken}`;
  const origins = {
    shopify: {
      url: SHOPIFY_URL_GET_ORDERS,
    },
    woocommerce: {
      url: WOOCOMERCE_URL_GET_ORDERS,
    },
    vtex: {
      url: "",
    },
  };
  return origins[shopName];
};

export default handleGetOrders;
