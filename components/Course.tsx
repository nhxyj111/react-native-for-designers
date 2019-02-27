import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import styled from "../styled-components";

interface IProps {
  subtitle: string;
  title: string;
  author: string;
  caption: string;
  image: ImageSourcePropType;
  logo: ImageSourcePropType;
  avatar: ImageSourcePropType;
}

const Course: React.FC<IProps> = ({
  image,
  logo,
  subtitle,
  title,
  avatar,
  author,
  caption
}) => (
  <Container>
    <Cover>
      <BG source={image} />
      <Logo source={logo} resizeMode="contain" />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Cover>
    <Context>
      <Avatar source={avatar} />
      <Caption>{caption}</Caption>
      <Author>Taught by {author}</Author>
    </Context>
  </Container>
);

export default Course;

const Container = styled(View)`
  width: 335px;
  height: 335px;
  background: white;
  margin: 10px 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled(View)`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const BG = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Subtitle = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  margin-left: 20px;
`;

const Title = styled(Text)`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Logo = styled(Image)`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const Context = styled(View)`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled(Image)`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled(Text)`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
`;

const Author = styled(Text)`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
