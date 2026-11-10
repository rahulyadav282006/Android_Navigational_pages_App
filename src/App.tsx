
import React from 'react'
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

//Navigation

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"

import Home from './screens/Home'
import Details from './screens/Details'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export type RootStackParamList={
  Home :undefined;
  Details:{productId:string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title:"Trending Products"
        }}
         />
        <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title:"Products Details"
        }}
         />

      </Stack.Navigator>
    </NavigationContainer>
    
   
  );
}





export default App;
