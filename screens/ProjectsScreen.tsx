import React from "react";
import { Text, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import styled from "../styled-components";

class ProjectsScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Title>Projects Screen</Title>
      </Container>
    );
  }
}

export default ProjectsScreen;

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)``;
