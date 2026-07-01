import React, { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { User } from 'lucide-react-native';
import { CalendarDays } from 'lucide-react-native';
import { Mail } from 'lucide-react-native';
import { Phone } from 'lucide-react-native';

import { FileUser } from 'lucide-react-native';

export const PerfilScreen = () => {

   
    const dadosUsuario = [
        {
            id: '1',
            label: 'Nome Completo',
            valor: 'Nome Sobrenome',
            icon: () => <User size={22} color="#1D3D87" />
        },
        {
            id: '2',
            label: 'Data de Nascimento',
            valor: '00/00/0000',    
            icon: () => <CalendarDays size={22} color="#1D3D87" />
        },
        {
            id: '3',
            label: 'Email',
            valor: 'email@exemplo.com',
            icon: () => <Mail size={22} color="#1D3D87" />
        },
        {
            id: '4', 
            label: 'Telefone',
            valor: '(11) 99999-9999',
            icon: () => <Phone size={22} color="#1D3D87" />
        },
        {
            id: '5',
            label: 'CPF',
            valor: '000.000.000-00',
            icon: () => <FileUser size={22} color="#1D3D87" />
        }
    ];

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.mainTitle}>Informações Pessoais</Text>

            {/* Loop para renderizar cada card de informação */}
            {dadosUsuario.map((item) => (
                <View key={item.id} style={styles.infoCard}>
                    
                    {/* Container do Ícone (Quadrado Azul Claro) */}
                    <View style={styles.iconContainer}>
                        {item.icon()}
                    </View>

                    {/* Container dos Textos (Label e Valor) */}
                    <View style={styles.textContainer}>
                        <Text style={styles.label}>{item.label}</Text>
                        <Text style={styles.valor}>{item.valor}</Text>
                    </View>

                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        top: 170,
    },
    content: {
        padding: 20,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1D3D87', // Azul escuro do título principal
        marginBottom: 20,
    },

    // Estrutura do card com a borda externa fina
    infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0', // Cor suave para a borda do card
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    // Quadrado com fundo azul claro para o ícone
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 10,
        backgroundColor: '#EEF3FF', 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    // Texto de cima (menor e cinza)
    label: {
        fontSize: 13,
        color: '#718096',
        marginBottom: 2,
    },
    // Texto de baixo (maior e azul escuro)
    valor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1D3D87',
    },
});