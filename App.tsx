import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InicialScreen } from './Source/Views/Inicial/Inicial'; 
import { PerfilScreen } from './Source/Views/Inicial/Perfil/Perfil'; 
import { EditarPerfilScreen } from "./Source/Views/Editar/editarPerfil";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
          {/*} <Stack.Screen 
          name="Inicial" 
          component={InicialScreen} 
          options={{ headerShown: false }}
          
        /> 
         
      
         
         {/*{ <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ headerShown: false }}
        /> 
         */}
         <Stack.Screen
          name="EditarPerfil" 
          component={EditarPerfilScreen}
          options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}