import React from "react";
import { Image, Text, View } from "react-native";
import styled from "../styled-components";

const Card = () => (
  <Container>
    <Cover>
      <CoverBG source={{ uri: "https://source.unsplash.com/100x100" }} />
      <Title>Styled Components</Title>
    </Cover>
    <Content>
      <Logo source={{ uri: "https://source.unsplash.com/50x50" }} />
      <Caption>React Native</Caption>
      <Subtitle>5 of 12 sections</Subtitle>
    </Content>
  </Container>
);

const Content = styled(View)``;

const Logo = styled(Image)``;

const Caption = styled(Text)``;

const Subtitle = styled(Text)``;

const Cover = styled(View)`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  background: yellowgreen;
`;

const CoverBG = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled(Text)`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Container = styled(View)`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export default Card;
