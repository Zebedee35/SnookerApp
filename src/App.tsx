// import 'react-native-gesture-handler';

import React from 'react';
import { Image } from 'react-native';
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
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Seasons' component={SeasonScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <SeasonIcon color={xTheme.colors.score} />
          )
        }} />
        <Tab.Screen name='Live' component={LiveScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <LiveIcon color={xTheme.colors.score} />
          )
        }} />
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <HomeIcon color={xTheme.colors.score} />
            )
          }} />
        <Tab.Screen name='Rankings' component={RankScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <RankingIcon color={xTheme.colors.score} />
          )
        }} />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon color={xTheme.colors.score} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
