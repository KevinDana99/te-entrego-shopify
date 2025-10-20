import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 500px;
  justify-content: space-around;
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #fdfdfd;
  border: solid 0.66px #8a8a8a;
  border-radius: 10px;
  padding: 10px 12px;
  box-sizing: border-box;
  height: 42px;
`;

export const InputLabel = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: black;
  border: none !important;
  outline: none !important;
  min-height: 0px !important;
`;

export const SelectTitle = styled.span`
  font-weight: 650;
  font-size: 13px;
  line-height: 20px;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: black;
  min-height: 0px !important;
  border: none !important;
  max-width: 100% !important;
  outline: none !important;
`;

export const Icon = styled.span`
  margin-left: 3px;
  cursor: pointer;
`;

export const Button = styled.button`
  align-self: flex-end;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  outline: none;
`;

export const Alert = styled.div<{ theme: string }>`
  position: relative;
  bottom: 40px;
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
  margin-bottom: var(--bs-alert-margin-bottom);
  color: var(--bs-alert-color);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
  ${({ theme }) =>
    theme === "primary"
      ? `
      background-color:  #b7dbf0;
  color: #03346a;
  `
      : `
    background-color: #b8e1b1;
  color: #056513;
  `}

  padding: 10px;
  border-radius: 5px;
`;
