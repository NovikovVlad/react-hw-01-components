import styled from "styled-components";

export const Wrapper = styled.section`
  width: 268px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 2px rgba(2, 2, 2, 0.02);
  background-color: #ffffff;
  font-family: sans-serif;
  margin: 15px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 30px 0;
  color: #475965;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.16px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 67px;
  height: 60px;
  align-items: center;
  background: ${(props) => props.background};
`;

export const Label = styled.span`
  color: #ffffff;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.3px;
`;

export const Percentage = styled.span`
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.45px;
`;
