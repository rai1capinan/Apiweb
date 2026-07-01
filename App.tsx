import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InicialScreen } from './Source/Views/Inicial/Inicial'; // Ajuste o caminho correto para o arquivo da sua tela
import { PerfilScreen } from './Source/Views/Inicial/Perfil/Perfil'; // Ajuste o caminho correto para o arquivo da sua tela

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen 
          name="Inicial" 
          component={InicialScreen} 
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}