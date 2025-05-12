import {
  Alert,
  Button,
  Container,
  Icon,
  Input,
  InputContainer,
  InputLabel,
  InputWrapper,
  Select,
} from "./styled";
import { MdOutlineContentPaste } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import useConfig from "./hooks/useConfig";

const Config = () => {
  const {
    showInput,
    config,
    options,
    showAlert,
    handleShowInput,
    handleCopyTextInput,
    handleSaveConfig,
    handleOnChangeConfig,
  } = useConfig();

  return (
    <Container>
      <InputContainer>
        <InputLabel>Transportista </InputLabel>
        <InputWrapper>
          <Select
            defaultValue={config.operator}
            onChange={(e) => handleOnChangeConfig({ operator: e.target.value })}
          >
            {options.map((operator) => (
              <option value={operator.code}>{operator.name}</option>
            ))}
          </Select>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputLabel>Codigo de cliente: </InputLabel>
        <InputWrapper>
          <Input
            type="text"
            onChange={(e) =>
              handleOnChangeConfig({ client_code: e.target.value })
            }
            value={config.client_code}
          />
          <Icon>
            <MdOutlineContentPaste
              size={20}
              onClick={() => handleCopyTextInput("client_code")}
            />
          </Icon>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputLabel>Clave te-Entrego: </InputLabel>
        <InputWrapper>
          <Input
            type="text"
            onChange={(e) =>
              handleOnChangeConfig({ public_key: e.target.value })
            }
            value={config.public_key}
          />
          <Icon>
            <MdOutlineContentPaste
              size={20}
              onClick={() => handleCopyTextInput("public_key")}
            />
          </Icon>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputLabel>Llave de seguridad: </InputLabel>
        <InputWrapper>
          <Input
            type={showInput.secret ? "text" : "password"}
            onChange={(e) =>
              handleOnChangeConfig({ secret_key: e.target.value })
            }
            value={config.secret_key}
          />
          <Icon>
            {!showInput.secret ? (
              <IoEye
                size={20}
                onClick={() => handleShowInput({ secret: true })}
              />
            ) : (
              <IoEyeOff
                size={20}
                onClick={() => handleShowInput({ secret: false })}
              />
            )}
          </Icon>
          <Icon>
            <MdOutlineContentPaste
              size={20}
              onClick={() => handleCopyTextInput("secret_key")}
            />
          </Icon>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputLabel>Clave publica plataforma: </InputLabel>
        <InputWrapper>
          <Input
            type="text"
            onChange={(e) =>
              handleOnChangeConfig({ platform_public_key: e.target.value })
            }
            value={config.platform_public_key}
          />
          <Icon>
            <MdOutlineContentPaste
              size={20}
              onClick={() => handleCopyTextInput("platform_public_key")}
            />
          </Icon>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputLabel>Llave de seguridad plataforma: </InputLabel>
        <InputWrapper>
          <Input
            type={showInput.platform_secret ? "text" : "password"}
            onChange={(e) =>
              handleOnChangeConfig({ platform_secret_key: e.target.value })
            }
            value={config.platform_secret_key}
          />
          <Icon>
            {!showInput.platform_secret ? (
              <IoEye
                size={20}
                onClick={() => handleShowInput({ platform_secret: true })}
              />
            ) : (
              <IoEyeOff
                size={20}
                onClick={() => handleShowInput({ platform_secret: false })}
              />
            )}
          </Icon>
          <Icon>
            <MdOutlineContentPaste
              size={20}
              onClick={() => handleCopyTextInput("platform_secret_key")}
            />
          </Icon>
        </InputWrapper>
        <Button onClick={handleSaveConfig}>Guardar</Button>
        {showAlert && <Alert theme={showAlert.theme}>{showAlert.value}</Alert>}
      </InputContainer>
    </Container>
  );
};

export default Config;
