import { StyleSheet } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Bill from '../screens/Bill';``
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = 'home';

            if (route.name === 'Home') {
              iconName = 'home';
              // color = focused ? 'blue' : 'black'
            } else if (route.name === 'Bill') {
              iconName = 'money';
              // color = focused ? 'blue' : 'black'
            } else if (route.name === 'Profile') {
              iconName = 'profile';
            }

            // You can return any component that you like here!
            return iconName !== 'profile' ? <Icon name={iconName} size={size} color={color} /> : <AntIcon name={iconName} size={size} color={color} /> ;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Bill" component={Bill} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
