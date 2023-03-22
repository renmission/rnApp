import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import UploadScreen from '../screens/UploadScreen/UploadScreen';
import ScanScreen from '../screens/ScanScreen/ScanScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import HomeIcon from '../../assets/icons/Home.svg';
import EditIcon from '../../assets/icons/Edit.svg';
import ScanIcon from '../../assets/icons/Scan.svg';
import NotificationIcon from '../../assets/icons/Notification.svg';
import ProfileIcon from '../../assets/icons/Profile.svg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon height={size} width={size} fill={color} />;
            case 'Upload':
              return <EditIcon height={size} width={size} fill={color} />;
            case 'Scan':
              return <ScanIcon height={size} width={size} fill={color} />;
            case 'Notification':
              return (
                <NotificationIcon height={size} width={size} fill={color} />
              );
            case 'Profile':
              return <ProfileIcon height={size} width={size} fill={color} />;
            default:
              return null;
          }
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIconStyle: {
            backgroundColor: '#1FCC79',
            height: 56,
            width: 56,
            position: 'absolute',
            borderRadius: 9999,
            top: -28,
          },
        }}
      />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
