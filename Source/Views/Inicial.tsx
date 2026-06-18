import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../App";
import { View, Text, Image, StyleSheet, ToastAndroid, Platform, Alert, TouchableOpacity } from 'react-native';

import  useViewModel  from "./ViewModel"; 

export const InicialScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { butoonEntrar,butoonCriarConta  } = useViewModel();

    return (
        <View style={styles.container}>
            <Text>Tela Inicial</Text>

            <TouchableOpacity style={styles.buttonEntrar}>
                <Text style={styles.buttonCriarConta}>Entar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
             <Text style = {styles.buttonCriarConta}>Criar Conta </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    
    container:{
    
    },
    buttonCriarConta: {

    },
    buttonEntrar:{
         
    }


})

