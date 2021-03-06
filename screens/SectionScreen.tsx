import React from "react";
import {
  Image,
  Linking,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  WebView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationInjectedProps } from "react-navigation";
import styled from "../styled-components";

// const webviewRef = React.createRef();

class SectionScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");
    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <CoverBG source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          style={{ position: "absolute", top: 20, right: 20 }}
          onPress={() => this.props.navigation.goBack()}>
          <CloseView>
            <Ionicons
              name="ios-close"
              size={36}
              color="#4775f2"
              style={{ marginTop: -2 }}
            />
          </CloseView>
        </TouchableOpacity>
        <Content>
          <WebView
            source={{ html: htmlContent + htmlStyles }}
            scalesPageToFit={false}
            scrollEnabled={false}
            ref="webview"
            onNavigationStateChange={event => {
              if (event.url && event.url !== "about:blank") {
                (this.refs.webview as WebView).stopLoading();
                Linking.openURL(event.url);
              }
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default SectionScreen;

const htmlContent = `
<h2>This is a title</h2>
<p>This is <strong>is</strong> a <a href="http://www.designcode.io">Go to DesignCode.io</a></p>
<img src="https://source.unsplash.com/400x400/?car"/>
`;

const htmlStyles = `
<style>
* {
  font-family: -apple-system, Roboto;
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
}
</style>
`;

const Content = styled(View)`
  height: 100%;
  padding: 20px;
`;

const Container = styled(View)`
  flex: 1;
`;

const Cover = styled(View)`
  height: 375px;
`;

const CoverBG = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled(Text)`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled(Text)`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled(View)`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(View)`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled(Image)`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled(Text)`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
