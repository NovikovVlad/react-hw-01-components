import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

export const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <S.Wrapper>
    <S.Description>
      <S.Avatar src={avatar} alt="user avatar" />
      <S.Name>{name}</S.Name>
      <S.Tag>{tag}</S.Tag>
      <S.Location>{location}</S.Location>
    </S.Description>
    <S.Stats>
      <li>
        <S.Label>Followers</S.Label>
        <S.Quantity> {followers}</S.Quantity>
      </li>
      <li>
        <S.Label>Views</S.Label>
        <S.Quantity> {views}</S.Quantity>
      </li>
      <li>
        <S.Label>Likes</S.Label>
        <S.Quantity> {likes}</S.Quantity>
      </li>
    </S.Stats>
  </S.Wrapper>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

Profile.defaultProps = {
  name: "Unknown",
  tag: "",
  location: "",
  avatar: "",
  stats: {
    followers: "",
    views: 0,
    likes: 0,
  },
};
