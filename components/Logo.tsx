import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import styled from "../styled-components";

interface IProps {
  image: ImageSourcePropType;
  text: string;
}

const Logo: React.FC<IProps> = ({ image, text }) => (
  <Container>
    <LogoImage source={image} resizeMode="contain" />
    <LogoText>{text}</LogoText>
  </Container>
);

const Container = styled(View)`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  align-items: center;
  margin: 0 8px;
`;

const LogoImage = styled(Image)`
  width: 36px;
  height: 36px;
`;

const LogoText = styled(Text)`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;

export default Logo;
