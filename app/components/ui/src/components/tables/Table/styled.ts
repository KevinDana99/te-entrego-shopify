import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-height: 500px; /* Altura máxima del área con scroll */
  overflow-y: auto;
  padding: 0px 0px 20px 15px;
  border: solid 1px #59b6e7;
  border-radius: 10px;
  background: white;
  z-index: 2;
  box-sizing: border-box;
`;
export const Block = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: 15px;
  background: white;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: auto;
`;
export const Head = styled.thead`
  position: sticky;
  top: 15px;
  z-index: 1;
  background: #ffffff;
  color: #373737;
  font-size: 14px;
`;

export const Body = styled.tbody`
  background: #ffffff;
  z-index: 1;
`;

export const Th = styled.th`
  width: 200px;
  padding: 15px;
  box-sizing: border-box;
  font-weight: 500;
  margin: 1px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.22);
`;
export const Td = styled(Th)<{ active: boolean }>`
  width: 200px;
  background: ${({ active }) => (active ? "#f2f2f2" : "#ffffff")};
  font-weight: 400;
  font-size: 15px;
  box-shadow: none;
  border: 1px solid #ececec;
  white-space: nowrap; /* Mantiene el texto en una sola línea */
  overflow: hidden; /* Oculta el desbordamiento */
  text-overflow: ellipsis;
`;
