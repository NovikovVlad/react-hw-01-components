import React from "react";
import * as S from "./style";
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const items = stats.map((stat) => (
    <S.Item key={stat.id} background={getRandomColor()}>
      <S.Label>{stat.label}</S.Label>
      <S.Percentage>{stat.percentage}</S.Percentage>
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
  ),
};

Statistics.defaultProps = {
  title: "Default",
  stats: [],
};
