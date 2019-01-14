import { createStackNavigator } from 'react-navigation';
import HomeContainer from './Home';

const AppNavigator = createStackNavigator({
  Home: HomeContainer
},{
  initialRouteName: 'Home'
});

export default AppNavigator;