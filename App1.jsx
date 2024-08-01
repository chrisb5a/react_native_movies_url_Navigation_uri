/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen.jsx';
import ListScreen from './Screens/ListScreen.jsx';
import Movies from './Screens/Movies.jsx';
import ItemDetail from './Screens/ItemDetail.jsx';
const Stack = createNativeStackNavigator();

export default function App1(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Yes'}}
        />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



