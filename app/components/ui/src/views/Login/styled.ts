import styled from "styled-components";

export const Container = styled.div`
  background: #59b6e7;
  width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
`;

export const LeftSection = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0px 20px;
  @media (min-width: 0px) and (max-width: 800px) {
    display: none;
  }
`;

export const LoginContainer = styled.form`
  margin: 40px;
  padding: 20px 40px;
  width: 100%;
  max-width: 700px;
  height: 550px;
  border-radius: 15px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin-bottom: 16px;
`;

export const TitleSection = styled.span`
  font-weight: 700 !important;
  font-size: 1.626rem;
  color: white;
`;

export const Description = styled.span`
  font-size: 1.42275rem;
  color: #332e38;
  text-align: center;
  max-width: 450px;
  width: 100%;
`;

export const FooterLabel = styled.span`
  color: #ffffff;
  font-weight: 600;
  font-size: 1.01625rem;
`;

export const PostDescriptionLabel = styled.span`
  font-size: 16px;
  color: #47404f;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  color: #70657b;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: solid 2px #7dd1ff;
  border-radius: 0.25rem;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  width: 100%;
  max-width: 300px;
  justify-content: space-around;
`;
export const Button = styled.button<{ primary?: boolean; secondary?: boolean }>`
  width: 100%;
  height: 35px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${({ primary, secondary }) =>
    (primary && `#003473`) || (secondary && `#47404f`)};
  color: white;
  cursor: pointer;
  border: none;
  margin-left: 5px;
  border-radius: 5px;
  &:active {
    background-color: ${({ primary, secondary }) =>
      (primary && `#001d40`) || (secondary && `#221f25`)};
  }
  user-select: none;
`;

export const RecoveryButton = styled.a`
  font-size: 0.813rem;
  color: #59b6e7;
`;

export const IllustrationContainer = styled.div``;

export const Logo = styled.div`
  margin-bottom: 50px;
`;
