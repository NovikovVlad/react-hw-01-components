import styled from "styled-components";

export const Table = styled.table`
  border: none;
  border-radius: 5px;
`;

export const Row = styled.tr`
  background: ${({ isOdd }) => (isOdd ? "white" : "#F4F7F9")};
`;

export const Cell = styled.td`
  text-align: center;
  vertical-align: center;
  height: 50px;
  width: 290px;
  color: #b7b9be;
  font-family: "Lato", sans-serif;
`;

export const HeaderCell = styled.th`
  background: #01bcd6;
  height: 50px;
  color: white;
  text-transform: uppercase;
`;
