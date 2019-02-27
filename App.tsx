import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
import Card from "./components/Card";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import styled from "./styled-components";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <Avatar source={require("./assets/avatar-default.jpg")} />
              <Title>Welcome back,</Title>
              <Name>Meng</Name>
              <NotificationIcon
                style={{
                  position: "absolute",
                  right: 20,
                  top: 5
                }}
              />
              {/* <Ionicons
                name="ios-notifications"
                size={32}
                color={"#4775f2"}
                style={{
                  position: "absolute",
                  right: 20,
                  top: 5
                }}
              /> */}
            </TitleBar>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}>
              <Logo
                text="Framer X"
                image={require("./assets/logo-framerx.png")}
              />
              <Logo text="Figma" image={require("./assets/logo-figma.png")} />
              <Logo text="Sketch" image={require("./assets/logo-sketch.png")} />
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                paddingBottom: 30
              }}>
              <Card
                title="Styled Components"
                image={require("./assets/background1.jpg")}
                logo={require("./assets/logo-react.png")}
                caption="React Native"
                subtitle="5 of 12 sections"
              />
              <Card
                title="Styled Components 2"
                image={require("./assets/background2.jpg")}
                logo={require("./assets/logo-react.png")}
                caption="React Native"
                subtitle="5 of 12 sections"
              />
              <Card
                title="Styled Components 3"
                image={require("./assets/background3.jpg")}
                logo={require("./assets/logo-react.png")}
                caption="React Native"
                subtitle="5 of 12 sections"
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const Subtitle = styled(Text)`
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Avatar = styled(Image)`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled(View)`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled(Text)`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled(Text)`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled(View)`
  width: 100%;
  /* margin-top: 50px; */
  padding-left: 80px;
`;
