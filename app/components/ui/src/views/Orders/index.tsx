import Logo from "../../components/assets/Logo";
import OrderTable from "../../components/tables/OrderTable";
import { ShopNameType } from "../../hooks/usePolling/types";
import usePolling from "../../hooks/usePolling/usePolling";
import { StoreType } from "../../wrapper";

const Orders = ({
  shopName,
  store,
}: {
  shopName: ShopNameType;
  store?: StoreType;
}) => {
  const { data, loading, error } = usePolling({
    store,
    shopName,
    time: 5000,
  });
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Logo size={250} />
      </div>
    );
  }

  if (error) {
    return `${error}`;
  }

  return (
    <OrderTable
      shopName={shopName}
      data={data}
      headers={[
        "Pedido",
        "Fecha",
        "Cliente",
        "Canal",
        "Total",
        "Estado del pago",
        "Estado de preparacion del pedido",
        "Articulos",
        "Estado de la entrega",
        "Despacho",
      ]}
    />
  );
};

export default Orders;
