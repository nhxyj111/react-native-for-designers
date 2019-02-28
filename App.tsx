import React from "react";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { menuReducer } from "./redux/reducers";
import HomeScreen from "./screens/HomeScreen";

// export interface IState {
//   readonly action: string;
// }

// interface IAction {}

// const initialState: IState = {
//   action: "openMenu"
// };

// const reducer: Reducer<IState, Action<IAction>> = (
//   state = initialState,
//   action
// ) => {
//   return state;
// };

// type IReducer = (state: IState, action: IAction) => IState;

// const reducer: IReducer = (state = initialState, action) => {
//   return state;
// };

const store: Store = createStore(menuReducer);

// export type AppState = ReturnType<typeof reducer>;

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
