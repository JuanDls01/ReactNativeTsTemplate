import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../helpers/colors';
import HomeScreen from '../../screens/Home';
import UserScreen from '../../screens/User';
import {Dashboard, Accounts} from '../../assets/icons/Icons';
const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{
          tabBarLabelStyle: {fontSize: 14},
          tabBarActiveTintColor: Colors.White,
          tabBarInactiveTintColor: Colors.Gray,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.PurpleDarker,
            borderTopColor: Colors.PurpleDarker,
            height: 100,
          },
        }}>
        <Tab.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{
            tabBarIcon: Dashboard,
            title: 'Home',
          }}
        />
        <Tab.Screen
          name={'UserScreen'}
          component={UserScreen}
          options={{
            tabBarIcon: Accounts,
            title: 'User',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default MainTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
