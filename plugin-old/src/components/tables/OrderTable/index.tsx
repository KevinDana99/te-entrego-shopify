import { Link } from "../../../routes";
import { Head, Table, Body, Container, Block, Th, Td } from "../Table/styled";
import {
  OrderTableType,
  ShopifyOrdersType,
  WoocomerceOrdersType,
  WoocomerceOrderType,
} from "./types";

const OrderTable = ({ headers, data, shopName }: OrderTableType) => {
  const mapWoocomerceOrders = () => {
    const woocomerceData = data as WoocomerceOrdersType;
    const orders = woocomerceData.map((item) => {
      const order: WoocomerceOrderType = {
        name: item.id,
        created_at: item.date_created,
        seller: item.store,
        customer: {
          first_name: item.billing.first_name,
          last_name: item.billing.last_name,
          city: item.billing.city,
          country: item.billing.country,
          email: item.billing.email,
          phone: item.billing.phone,
          postcode: item.billing.postcode,
          state: item.billing.state,
          address_1: item.billing.address_1,
          address_2: item.billing.address_2,
        },
        total_price: item.total,
        sub_total_price: item.subtotal,
        financial_status: item.status,
        fulfillment_status: "preparing",
        fulfillable_quantity: Object.entries(item.line_items)[0][1].quantity,
        line_items: [
          {
            fulfillable_quantity: Object.entries(item.line_items)[0][1]
              .quantity,
          },
        ],
        products: item.products,
        payment_method: item.payment_method,
      };
      return order;
    });
    return orders;
  };

  const mapShopifyOrders = () => {
    const shopifyData = data as ShopifyOrdersType;
    const shopifyDataOrders = shopifyData.orders
    console.log( {shopifyDataOrders})
 const orders = shopifyDataOrders.map((item) => {
const order = {
  name: item.name,
  created_at: item.created_at,
  seller: item.line_items[0].vendor,
  customer: {
    first_name: item.customer.first_name,
    last_name: item.customer.last_name,
    city: item.customer.default_address.city,
    country: item.customer.default_address.country,
    email: item.customer.email,
    phone: item.customer.phone,
    postcode: item.customer.default_address.zip,
    state: item.customer.default_address.province,
    address_1: item.customer.default_address.address1,
    address_2: item.customer.default_address.address2,
},
total_price: item.total_price,
sub_total_price: item.subtotal_price,
financial_status: item.financial_status,
fulfillment_status: "preparing",
fulfillable_quantity: item.line_items[0].fulfillable_quantity,
line_items: [
  {
    fulfillable_quantity: item.line_items[0].fulfillable_quantity
  },
],
products: [ {
  "name": item.line_items[0].title,
  "weight": 0,
  "width": 0,
  "height": 0,
  "length": 0
}],
payment_method: "cod",
}
      return order;
    })
    return orders;

  };

  const handleSelectedOrders = () => {
    if (shopName === "shopify") {
return mapShopifyOrders();
    }
    if (shopName === "woocommerce") {
      return mapWoocomerceOrders();
    }
  };
  const orders = handleSelectedOrders();
  return (
    <Container>
      <Block> </Block>
      <Table>
        <Head>
          <tr>
            {headers.map((head) => (
              <Th>{head}</Th>
            ))}
          </tr>
        </Head>

        <Body>
          {orders?.map((order, index) => {
            const active = index % 2 == 0 ? true : false;
            return (
              <>
                <tr>
                  <Td active={active}>{order?.name}</Td>
                  <Td active={active}>{order?.created_at}</Td>
                  <Td
                    active={active}
                  >{`${order?.customer.first_name} ${order?.customer.last_name}`}</Td>
                  <Td active={active}>Tienda Online</Td>
                  <Td active={active}>{`$${order?.total_price}`}</Td>
                  <Td active={active}>
                    {" "}
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "18px",
                        background: "#663399",
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {order?.financial_status}
                    </div>
                  </Td>
                  <Td active={active}>
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "18px",
                        background: "#663399",
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {order?.fulfillment_status}
                    </div>
                  </Td>
                  <Td active={active}>
                    {order?.fulfillable_quantity}
                  </Td>
                  <Td active={active}>
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "18px",
                        background: "#663399",
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {order?.fulfillment_status}
                    </div>
                  </Td>
                  <Td active={active}>
                    <Link path="shipment-method" order={order}>
                      <button style={{ margin: 3, background: "#59b6e7" }}>
                        Enviar Pedido
                      </button>
                    </Link>
                  </Td>
                </tr>
              </>
            );
          })}
        </Body>
      </Table>
    </Container>
  );
};

export default OrderTable;
