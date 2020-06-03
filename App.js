import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GetName from './src/screens/GetName';
import {StatusBar} from 'react-native';
import Chat from './src/screens/ChatScreen';
import Loading from './src/screens/LoadingScreen';
import ChatList from './src/screens/ChatList';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar animated backgroundColor="#00CF91" />
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          cardStyle: {backgroundColor: '#fff'},
          headerShown: false,
        }}>
        <Stack.Screen name="GetName" component={GetName} />
        <Stack.Screen
          name="Chat"
          options={{animationTypeForReplace: 'pop'}}
          component={Chat}
        />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
