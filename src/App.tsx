// import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/Home'
import LiveScreen from './screens/Live'
import RankScreen from './screens/Rank'
import SettingsScreen from './screens/Settings'
import SeasonScreen from './screens/Season'

import { HomeIcon, SeasonIcon, SettingsIcon, RankingIcon, LiveIcon } from './components/icons/index'
import xTheme from './utils/xTheme'

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: xTheme.colors.tabBar }}>
        <Tab.Screen name='Seasons' component={SeasonScreen} options={{
          tabBarIcon: ({ color }) => (
            <SeasonIcon color={color} />
          )
        }} />
        <Tab.Screen name='Live' component={LiveScreen} options={{
          tabBarIcon: ({ color }) => (
            <LiveIcon color={color} />
          )
        }} />
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon color={color} />
            )
          }} />
        <Tab.Screen name='Rankings' component={RankScreen} options={{
          tabBarIcon: ({ color }) => (
            <RankingIcon color={color} />
          )
        }} />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{
          tabBarIcon: ({ color }) => (
            <SettingsIcon color={color} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
