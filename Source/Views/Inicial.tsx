import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../App";
import { View, Text, Image, StyleSheet, ToastAndroid, Platform, Alert, TouchableOpacity } from 'react-native';

import  useViewModel  from "./ViewModel"; 

export const InicialScreen = () => {

    const botoes =[
    { id: '1', texto: 'Velocidade', acao: () => console.log('0.5') },
    { id: '2', texto: 'Velocidade', acao: () => console.log('1.0') },
    { id: '3', texto: 'Velocidade', acao: () => console.log('1.5') },
    { id: '4', texto: 'Velocidade', acao: () => console.log('2.0') },
    ];


  
    <View>
        <Text> <title>Configurações</title>
        gerencie suas preferências do app 
        </Text>



         <View>
        <Text><title>Leitura de tela</title></Text>
           
         </View>

          <View>
        <Text><title>Tipo de voz feminina</title></Text>
          </View>

          <View>
         <Text><title>Volume de som</title></Text>
          </View>

          <View>
         <Text><title>Aparência</title></Text>
          </View>


    </View>


}
