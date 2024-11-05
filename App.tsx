import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/routes/Home';
import People from './src/routes/People';
import Document from './src/routes/Document';

import cUSG from './assets/color.json';
import RUSG from './assets/rusg.svg';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <RUSG width={size*2} height={size*2} style={{paddingBottom: 0}} />;
            } else if (route.name === 'People') {
              return <Ionicons name={focused ? 'people' : 'people-outline'} size={size} color={color} />;
            } else if (route.name === 'Document') {
              return <Ionicons name={focused ? 'document-text' : 'document-text-outline'} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: cUSG.USG.yellow,
          tabBarInactiveTintColor: cUSG.USG.blue,
          tabBarStyle: { paddingBottom: 0, marginTop: 50 },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name='People' component={People} />
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Document' component={Document} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
