import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  font-family: "Lato", sans-serif;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 330px;
  box-shadow: 0 1px 3px rgba(191, 205, 222, 0.75);
  background-color: #ffffff;
  margin: 15px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  padding: 30px;
  width: 99px;
  height: 99px;
  border-radius: 50%;
`;

export const Name = styled.div`
  color: #122236;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
`;

export const Tag = styled.p`
  margin: 0;
  padding: 0;
  color: #768696;
  font-size: 14px;
`;

export const Location = styled.p`
  margin: 0;
  padding: 0;
  color: #768696;
  font-size: 14px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 74px;
  border: 1px solid #e4e9f0;
  background-color: #f3f6f9;

  li {
    display: flex;
    width: 83px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  li + li {
    border-left: 1px solid #e4e9f0;
  }
`;

export const Label = styled.span`
  color: #768696;
  font-size: 12px;
`;

export const Quantity = styled.span`
  color: #1f3349;
  font-size: 14px;
  font-weight: 700;
`;
