import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
import Card from "./components/Card";
import Course from "./components/Course";
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
              {logos.map(({ image, text }) => (
                <Logo key={text} text={text} image={image} />
              ))}
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                paddingBottom: 30
              }}>
              {cards.map(({ title, image, subtitle, caption, logo }) => (
                <Card
                  key={title}
                  title={title}
                  image={image}
                  subtitle={subtitle}
                  caption={caption}
                  logo={logo}
                />
              ))}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {courses.map(
              ({ title, subtitle, image, logo, author, avatar, caption }) => (
                <Course
                  key={title}
                  title={title}
                  subtitle={subtitle}
                  image={image}
                  logo={logo}
                  author={author}
                  avatar={avatar}
                  caption={caption}
                />
              )
            )}
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

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch"
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("./assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("./assets/logo-react.png")
  }
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "JKK MAS",
    avatar: require("./assets/avatar-default.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "10 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "JKK MAS",
    avatar: require("./assets/avatar-default.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "JKK MAS",
    avatar: require("./assets/avatar-default.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "JKK MAS",
    avatar: require("./assets/avatar-default.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];
