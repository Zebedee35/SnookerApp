// import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/Home'
import LiveScreen from './screens/Live'
import RankScreen from './screens/Rank'

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Seasons' component={HomeScreen} />
        <Tab.Screen name='Live' component={LiveScreen} />
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Rankings' component={RankScreen} />
        <Tab.Screen name='Settings' component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
