import "react-native-gesture-handler"
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import IssLocationScreen from './screens/IssLocationScreen'
import MeteorScreen from './screens/MeteorScreen';
import UpdateScreen from './screens/UpdateScreen'

const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown: false
      }}>
        <Stack.Screen name = "Home" component= {HomeScreen}/>
        <Stack.Screen name = "issLocation" component= {IssLocationScreen}/>
        <Stack.Screen name = "meteor" component= {MeteorScreen}/>
        <Stack.Screen name = "update" component= {UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;