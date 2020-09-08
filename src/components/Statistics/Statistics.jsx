import React from "react";
import PropTypes from "prop-types";

import { getRandomColor } from "../../utils";

import * as S from "./style";

export const Statistics = ({ title, stats }) => {
  const items = stats.map(({ id, label, percentage }) => (
    <S.Item key={id} background={getRandomColor()}>
      <S.Label>{label}</S.Label>
      <S.Percentage>{percentage}</S.Percentage>
    </S.Item>
  ));

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.StatList>{items}</S.StatList>
    </S.Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Statistics.defaultProps = {
  title: "Default",
  stats: [],
};
