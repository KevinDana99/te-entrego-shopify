import AppRouter from "./../routes";
import { Container } from "./styled";
import Sidebar from "../components/layouts/Sidebar";
import Views from "../views";
import Layout from "../Layout";
import useConfig from "../views/Config/hooks/useConfig";
import { ShopNameType } from "../hooks/usePolling/types";

export type ShopifyStoreType = {
  apiKey: string;
  appOrigins?: string[];
  disabledFeatures?: string[];
  experimentalFeatures?: string[];
  host?: string;
  locale?: string;
  shop?: string;
  accessToken: string | null;
};

export type StoreType = ShopifyStoreType;

const Wrapper = ({
  shopName,
  store,
}: {
  shopName: ShopNameType;
  store?: StoreType;
}) => {
  useConfig();

  return (
    <Container>
      <AppRouter defaultPath="shipments">
        <Layout>
          <Sidebar />
          <Views shopName={shopName} store={store} />
        </Layout>
      </AppRouter>
    </Container>
  );
};

export default Wrapper;
