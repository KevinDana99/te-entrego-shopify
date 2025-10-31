import useRouter from "../../routes/context/hook/useRouter";
import { RoutesType } from "../../routes/types";

type TitlesType = {
  [key in RoutesType]: string;
};

const titles: TitlesType = {
  config: "Configuracíon",
  shipments: "Mis envíos",
  orders: "Pedidos",
  "shipment-method": "Metodos de envio",
  "shipment-status": "Estado de envio",
};

const useViews = () => {
  const { currentPath } = useRouter();
  const selectedPath = titles[currentPath];

  return { path: selectedPath };
};

export default useViews;
