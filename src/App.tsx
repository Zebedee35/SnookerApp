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

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Seasons' component={SeasonScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/Season.png')} />
          )
        }} />
        <Tab.Screen name='Live' component={LiveScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/Live.png')} />
          )
        }} />
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/Home.png')} />
            )
          }} />
        <Tab.Screen name='Rankings' component={RankScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/Ranking.png')} />
          )
        }} />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/Settings.png')} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
