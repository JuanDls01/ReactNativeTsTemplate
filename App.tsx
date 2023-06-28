import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import UserScreen from './src/screens/User';
import MainTabs from './src/navigators/main-tabs';
import LoginScreen from './src/screens/Login';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'LoginScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name={'MainTabs'} component={MainTabs} />
        <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
