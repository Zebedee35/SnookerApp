// import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import HomeScreen from './screens/Home'
import LiveScreen from './screens/Live'
import RankScreen from './screens/Rank'
import SettingsScreen from './screens/Settings'
import SeasonScreen from './screens/Season'

import { HomeIcon, SeasonIcon, SettingsIcon, RankingIcon, LiveIcon } from './components/icons/index'
import { themes, ThemeContext, Theme } from './utils/Themes'

const Tab = createBottomTabNavigator();

const App = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes['light'])

  const prepareTheme = async () => {
    const darkMode = await AsyncStorage.getItem('@darkMode');
    (darkMode == '1') ? setCurrentTheme(themes['dark']) : setCurrentTheme(themes['light'])
  }

  useEffect(() => {
    prepareTheme()
  }, [])

  return (
    <NavigationContainer >
      <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{
          activeTintColor: currentTheme!.tabBar,
          style: {
            backgroundColor: currentTheme!.bgColor,
          },
        }}
        >
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
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};


export default App;
