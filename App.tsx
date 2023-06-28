import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import UserScreen from './src/screens/User';
import MainTabs from './src/navigators/main-tabs';
import LoginScreen from './src/screens/Login';
import {QueryClient, QueryClientProvider} from 'react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
