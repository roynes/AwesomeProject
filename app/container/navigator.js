import { createStackNavigator } from 'react-navigation';
import HomeContainer from './Home';
import Details from './Details/details';
import SlideShow from './Slideshow';

const AppNavigator = createStackNavigator({
  Home: HomeContainer,
  Details: Details,
  SlideShow,
},{
  initialRouteName: 'Home'
});

export default AppNavigator;