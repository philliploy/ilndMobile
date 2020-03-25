import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarScreen } from '../Calendar/calendar.component'
import { DetailsScreen } from '../Detail/details.component';

const Stack = createStackNavigator();

const DetailsNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Details' component={DetailsScreen}/>
     <Stack.Screen name='Calendar' component={CalendarScreen}/>
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <DetailsNavigator/>
  </NavigationContainer>
);