import React from "react";
import PropTypes from "prop-types";
import { Statistics } from "../Statistics/Statistics";

import * as S from "./style";

export const FriendList = ({ friends }) => {
  const list = friends.map(({ avatar, name, isOnline, id }) => (
    <S.Item key={id}>
      <S.Status isOnline={isOnline} />
      <S.Avatar src={avatar} alt="avatar" />
      <S.Name>{name}</S.Name>
    </S.Item>
  ));
  return <S.Wrapper>{list}</S.Wrapper>;
};

Statistics.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
