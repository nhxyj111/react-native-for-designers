import React from "react";
import { Button, Text, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import styled from "../styled-components";

class SectionScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Title>Section Screen</Title>
        <Button title="Close" onPress={() => this.props.navigation.goBack()} />
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)``;
