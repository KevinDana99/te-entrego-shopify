import { useEffect } from "react";
import Logo from "../../components/assets/Logo";
import ShipmentTable from "../../components/tables/ShipmentTable";
import useFetch from "../../hooks/useFetch";
import useRouter from "../../routes/context/hook/useRouter";
import { ConfigType } from "../Config/hooks/useConfig";

const Shipments = () => {
  const { currentProps } = useRouter();
  const minDate = new Date();
  minDate.setDate(minDate.getDate() - (34 + 1));
  const maxDate = new Date();
  const config: ConfigType = localStorage.getItem("config")
    ? JSON.parse(localStorage.getItem("config") ?? "")
    : null;

  const ACCESS_CLIENT_CODE = config.client_code;
  const ACCESS_PUBLIC_KEY = config.public_key;
  const ACCESS_SECRET_KEY = config.secret_key;
  const { data, error, loading, handleRefetch } = useFetch(
    "https://te-entrego.com/teadminbeta/public/api/estados_enviosv2",
    {
      min: `${minDate.getFullYear()}-${
        minDate.getMonth() + 1
      }-${minDate.getDate()}`,
      max: `${maxDate.getFullYear()}-${
        maxDate.getMonth() + 1
      }-${maxDate.getDate()}`,
      codigocliente: ACCESS_CLIENT_CODE,
      accesoapi: ACCESS_PUBLIC_KEY,
      llaveseguridad: ACCESS_SECRET_KEY,
    }
  );

  useEffect(() => {
    if (currentProps?.refetch) {
      handleRefetch();
    }
  }, [currentProps?.refetch]);

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
    <>
      <ShipmentTable
        headers={[
          "Operador",
          "Num",
          "Fecha",
          "Estado",
          "Cuenta Remitente",
          "Remitente",
          "Destino",
          "Destinatario",
          "Unidad",
          "Peso",
        ]}
        data={data}
      />
    </>
  );
};

export default Shipments;
