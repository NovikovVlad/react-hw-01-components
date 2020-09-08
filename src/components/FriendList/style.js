import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  width: 400px;
  height: 115px;
  padding: 0 15px;
  box-shadow: 0 1px 3px rgba(191, 205, 222, 0.75);
  background-color: #ffffff;
`;

export const Status = styled.span`
  height: 25px;
  width: 25px;
  display: block;
  margin-right: 15px;
  border-radius: 50%;
  background: ${({ isOnline }) => (isOnline ? "green" : "red")};
`;

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.16px;
  font-family: "Lato", sans-serif;
`;
