import useLogin from "./hooks/useLogin";
import {
  Button,
  ButtonContainer,
  Container,
  Description,
  FooterLabel,
  IllustrationContainer,
  Input,
  InputContainer,
  Label,
  LeftSection,
  LoginContainer,
  Logo,
  PostDescriptionLabel,
  RecoveryButton,
  TitleSection,
} from "./styled";

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const { handleLogin } = useLogin(onLogin);
  return (
    <Container>
      <LeftSection>
        <TitleSection>Inicio sesión</TitleSection>
        <IllustrationContainer>
          <img
            src="https://te-entrego.com/admin-assets/images/Registro_Ilus.svg"
            alt=""
            width={200}
          />
        </IllustrationContainer>
        <Description>
          ¡Todo lo que necesitas para el control contraentrega y logística de tu
          Ecommerce!
        </Description>
        <PostDescriptionLabel>¡Comienza ya!</PostDescriptionLabel>
        <FooterLabel>Te-entrego S.A.S. 2024</FooterLabel>
      </LeftSection>
      <LoginContainer onSubmit={handleLogin}>
        <Logo>
          <img
            src="https://te-entrego.com/admin-assets/images/logo_registro.svg"
            width={200}
          />
        </Logo>
        <InputContainer>
          <Label>*Correo electronico</Label>
          <Input type="email" required />
        </InputContainer>
        <InputContainer>
          <Label>*Contraseña</Label>
          <Input type="password" required />
        </InputContainer>
        <ButtonContainer>
          <Button primary type={"submit"}>
            Ingresar
          </Button>
          <Button type="submit" secondary>
            Eres nuevo
          </Button>
        </ButtonContainer>
        <RecoveryButton href="https://www.te-entrego.com">
          Recupera tu contraseña
        </RecoveryButton>
      </LoginContainer>
    </Container>
  );
};

export default Login;
