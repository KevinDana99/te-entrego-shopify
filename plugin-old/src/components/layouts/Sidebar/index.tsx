import {
  Container,
  Ico,
  Item,
  Menu,
  Selector,
  SelectorSubTitle,
  SelectorTitle,
  Title,
} from "./styled";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import useRouter from "../../../routes/context/hook/useRouter";
import { MdOutlineLanguage } from "react-icons/md";
import Sort from "../../assets/icons/Sort";

const Sidebar = () => {
  const { currentPath } = useRouter();
  return (
    <Container>
      <Selector>
        <MdOutlineLanguage size={30} color="#92929D" />
        <div>
          <SelectorTitle>Te-Entrego</SelectorTitle>
          <br />
          <SelectorSubTitle>te-entrego.com</SelectorSubTitle>
        </div>
        <Sort />
      </Selector>
      <Menu>
        <Title> MENU</Title>
        <Item path="orders" active={currentPath}>
          <>
            <Ico>
              <BsBoxSeam color="#92929D" size={19} />
            </Ico>
            Pedidos
          </>
        </Item>
        <Item path="shipments" active={currentPath}>
          <>
            <Ico>
              <MdOutlineMarkunreadMailbox color="#92929D" size={19} />
            </Ico>
            Mis envíos
          </>
        </Item>

        <Item path="config" active={currentPath}>
          <>
            <Ico>
              <IoSettingsOutline color="#92929D" size={19} />
            </Ico>
            Configuracíon
          </>
        </Item>
      </Menu>
    </Container>
  );
};

export default Sidebar;
