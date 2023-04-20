import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';

const AppNavigator = createStackNavigator({
  Main: { screen: Home },
  Login: { screen: Login },
});

export default AppNavigator;
