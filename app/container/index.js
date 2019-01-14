import { createAppContainer } from 'react-navigation'
import AppNavigator from "./navigator";

const AppContainer = createAppContainer(AppNavigator);

export {
  AppContainer
};