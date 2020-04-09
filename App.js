import 'react-native-gesture-handler';
import React from 'react';
import Home from './home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Form from './form';
import Favorites from './favorites';
import Recents from './recents';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          component={Home}
          options={{
            title: 'CONTACTS',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
              paddingLeft: 135,
            },
            headerShown: true,
          }}
        />
        <Stack.Screen
          options={{
            title: 'CREATE NEW CONTACT',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            // headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
            },
            headerShown: true,
          }}
          name="Create New"
          component={Form}
        />
        <Stack.Screen
          name="Favorites"
          options={{
            title: 'FAVORITES',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            // headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
            },
            headerShown: true,
          }}
          component={Favorites}
        />
        <Stack.Screen
          name="Recents"
          options={{
            title: 'RECENTS',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            // headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
            },
            headerShown: true,
          }}
          component={Recents}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
