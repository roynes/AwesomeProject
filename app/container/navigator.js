import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeContainer from './Home';
import Details from './Details';

const AppNavigator = createStackNavigator({
  Home: HomeContainer, Details
},{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#aa8fdb',
    },
    headerTintColor: '#fefefe',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

  }
});

export default AppNavigator;