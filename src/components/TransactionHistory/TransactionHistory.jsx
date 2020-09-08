import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";

export const TransactionHistory = ({ items }) => {
  const cells = items.map(({ id, type, amount, currency }, index) => (
    <S.Row key={id} isOdd={index % 2 === 0}>
      <S.Cell>{type}</S.Cell>
      <S.Cell>{amount}</S.Cell>
      <S.Cell>{currency}</S.Cell>
    </S.Row>
  ));

  return (
    <S.Table>
      <thead>
        <tr>
          <S.HeaderCell>Type</S.HeaderCell>
          <S.HeaderCell>Amount</S.HeaderCell>
          <S.HeaderCell>Currency</S.HeaderCell>
        </tr>
      </thead>
      <tbody>{cells}</tbody>
    </S.Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

TransactionHistory.defaultProps = {
  items: [],
};
