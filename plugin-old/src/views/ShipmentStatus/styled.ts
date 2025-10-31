import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperImg = styled.div`
  width: 84px;
  height: 84px;
`;

export const Card = styled.div`
  width: auto;
  height: 200px;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
`;

export const Divider = styled.div`
  width: 62px;
  margin: 0px 25px;
  height: 2px;
  background-color: #76ccfb;
`;

export const Status = styled.span`
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;
`;

export const Detail = styled.div`
  margin-top: 21px;
`;
