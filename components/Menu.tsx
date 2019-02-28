import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MenuItem from "../components/MenuItem";
import { closeMenu, MenuActions, showMenu } from "../redux/actions";
import { IMenuState } from "../redux/reducers";
import styled from "../styled-components";

const screenHeight = Dimensions.get("window").height;

interface IProps {
  status: MenuActions;
  closeMenu: typeof closeMenu;
  showMenu: typeof showMenu;
}

interface IState {
  top: Animated.Value;
}

class Menu extends React.Component<IProps, IState> {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.status === MenuActions.MENU_SHOW) {
      Animated.spring(this.state.top, {
        toValue: 54
      }).start();
    }
    if (this.props.status === MenuActions.MENU_CLOSE) {
      Animated.spring(this.state.top, {
        toValue: screenHeight
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <CoverBG source={require("../assets/background2.jpg")} />
          <Title>Meng To</Title>
          <Subtitle>Designer at Design+Code</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1
          }}>
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#456bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map(({ icon, title, text }) => (
            <MenuItem key={title} icon={icon} title={title} text={text} />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

function mapStateToProps(state: IMenuState) {
  return { status: state.status };
}

function mapDispatchProps(dispatch: any) {
  return bindActionCreators(
    {
      showMenu,
      closeMenu
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Menu);

const CoverBG = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled(Text)`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled(Text)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-top: 8px;
`;

const Container = styled(View)`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled(View)`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const CloseView = styled(View)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Content = styled(View)`
  height: ${screenHeight}px;
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings"
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments"
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course"
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!"
  }
];
