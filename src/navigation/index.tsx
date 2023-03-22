import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import AuthStackNavigator from './AuthStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Auth" component={AuthStackNavigator} />
      <Tab.Screen name="Tab" component={TabNavigator} />
    </Tab.Navigator>
  );
};

export default Navigation;
