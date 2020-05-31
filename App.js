import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GetName from './src/screens/GetName';
import { StatusBar } from 'react-native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar animated backgroundColor='#00CF91' />
      <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: '#fff'}}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="GetName"
          component={GetName}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
