import React from "react";
import { Image } from "react-native";
import styled from "../styled-components";

interface IState {
  photo: string;
}

class Avatar extends React.Component<{}, IState> {
  state = {
    photo: "https://img3.doubanio.com/icon/ul47207234-43.jpg"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext")
      .then(response => response.json())
      .then(response => {
        this.setState({
          photo: response.photo
        });
      });
  }

  render() {
    return <AvatarImg source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const AvatarImg = styled(Image)`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;
