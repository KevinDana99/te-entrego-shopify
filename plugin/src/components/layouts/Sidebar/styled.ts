import styled from "styled-components";
import { Link } from "../../../routes";
export const Container = styled.div`
  margin: 0px 13px;
  padding: 20px;
  min-width: 251px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
`;
export const Selector = styled.div`
  margin-top: 47px;
  width: 230px;
  height: 64px;
  padding: 19px 16px;
  box-sizing: border-box;
  background-color: #fafafb;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #e2e2ea;
`;
export const Menu = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Title = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1px;
  box-sizing: border-box;
  padding: 23px 20px;
  color: #92929d;
`;

export const SelectorTitle = styled(Title)`
  color: black;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1px;
`;
export const SelectorSubTitle = styled(Title)`
  color: #92929d;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.06px;
`;
export const Item = styled(Link)<{ active?: string }>`
  width: 100%;
  margin-top: 8.57px;

  box-sizing: border-box;
  padding: 8px 20px;
  color: black;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #76ccfb;
  }

  color: ${({ path, active }) => path === active && "#76ccfb"};
`;

export const Ico = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
