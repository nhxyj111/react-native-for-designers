import { createAppContainer } from "react-navigation";
import TabNavigator from "./TabNavigator";

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Section: SectionScreen
//   },
//   {
//     mode: "modal"
//   }
// );

export default createAppContainer(TabNavigator);
