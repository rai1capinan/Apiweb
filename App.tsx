import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {InicialScreen} from "./Source/Views/Inicial";



export type RootStackParamList ={
    InicialScreen: undefined;

    
}

const Stack = createNativeStackNavigator <RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}/>


            <Stack.Screen
            name = "InicialScreen"
            component={InicialScreen}/>


      


    </NavigationContainer>
  );
};

export default App;