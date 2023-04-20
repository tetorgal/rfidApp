import React from 'react';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './AppNavigator';

const NavigationContainer = createAppContainer(AppNavigator);

export default NavigationContainer;
