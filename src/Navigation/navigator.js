import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen/DetailsScreen';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import { CustomTabBar } from './CustomTab';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeStack" component={HomeScreen}  options={{
      headerShown:false
    }}/>
    <Stack.Screen name="MyCartStack" component={DetailsScreen} options={{
      headerShown:false
    }}/>
      <Stack.Screen  name="ProfileStack" component={ProfileScreen} options={{
      headerShown:false
    }}/>
    
  </Stack.Navigator>
);

const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} >
      <Tab.Screen name="Home" component={HomeStack} options={{
      headerShown:false
    }}/>
          <Tab.Screen name="MyCart" component={DetailsScreen} options={{
      headerShown:false
    }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
      headerShown:false
    }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigator;
