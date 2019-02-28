import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createBottomTabNavigator,
  createStackNavigator,
  NavigationInjectedProps
} from "react-navigation";
import CoursesScreen from "../screens/CoursesScreen";
import HomeScreen from "../screens/HomeScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import SectionScreen from "../screens/SectionScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen
  },
  {
    mode: "modal"
  }
);

HomeStack.navigationOptions = ({ navigation }: NavigationInjectedProps) => {
  let tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  if (routeName === "Section") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }: any) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen
});

CoursesStack.navigationOptions = {
  tabBarLabel: "Courses",
  tabBarIcon: ({ focused }: any) => (
    <Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const ProjectsStack = createStackNavigator({
  Projects: ProjectsScreen
});

ProjectsStack.navigationOptions = {
  tabBarLabel: "Projects",
  tabBarIcon: ({ focused }: any) => (
    <Ionicons
      name="ios-folder"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProjectsStack
});

export default TabNavigator;
