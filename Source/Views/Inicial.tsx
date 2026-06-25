import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

export const InicialScreen = () => {
    const [leituraAtiva, setLeituraAtiva] = useState(true);
    const [velocidade, setVelocidade] = useState('1.0x');
    const [tipoVoz, setTipoVoz] = useState('Masculina');

    const velocidades = ['0.5x', '1.0x', '1.5x', '2.0x'];

    return (
        <View style={styles.container}>
            {/* Cabeçalho Azul */}
            <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTitle}>Configurações</Text>
                    <Text style={styles.headerSubtitle}>Gerencie suas preferências de personalização do app</Text>
                </View>
                <View style={styles.iconPlaceholder} />
            </View>

            {/* Conteúdo das Configurações */}
            <View style={styles.contentContainer}>
                
                {/* Leitura de Tela */}
                <View style={styles.rowSetting}>
                    <Text style={styles.sectionTitle}>Leitura de tela</Text>
                    <Switch
                        value={leituraAtiva}
                        onValueChange={(value) => setLeituraAtiva(value)}
                        trackColor={{ false: '#767577', true: '#1D3D87' }}
                        thumbColor={leituraAtiva ? '#fff' : '#f4f3f4'}
                    />
                </View>

                {/* Velocidade da Fala */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Velocidade da fala</Text>
                    <View style={styles.botoesContainer}>
                        {velocidades.map((vel) => {
                            const isActive = velocidade === vel;
                            return (
                                <TouchableOpacity 
                                    key={vel} 
                                    style={[styles.buttonBadge, isActive && styles.buttonActive]} 
                                    onPress={() => setVelocidade(vel)}
                                >
                                    <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                                        {vel}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

        
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Tipo de Voz</Text>
                    <View style={styles.botoesContainer}>
                        {['Feminina', 'Masculina'].map((voz) => {
                            const isActive = tipoVoz === voz;
                            return (
                                <TouchableOpacity 
                                    key={voz} 
                                    style={[styles.buttonPill, isActive && styles.buttonActive]} 
                                    onPress={() => setTipoVoz(voz)}
                                >
                                    <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                                        {voz}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Volume do som */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Volume do som</Text>
                 
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderControl}>−</Text>
                        <View style={styles.sliderTrack}>
                            <View style={styles.sliderProgress} />
                            <View style={styles.sliderThumb} />
                        </View>
                        <Text style={styles.sliderControl}>+</Text>
                    </View>
                </View>

                {/* Aparência */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.mainTitle}>Aparência</Text>
                    <Text style={styles.sectionTitle}>Modo Escuro</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
      headerContainer: {
        backgroundColor: '#1D3D87',
        paddingTop: 50,
        paddingBottom: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    headerTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        color: '#ddd',
        fontSize: 12,
        marginTop: 5,
    },
    iconPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        opacity: 0.9,
    },

    contentContainer: {
        padding: 20,
    },
    rowSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    sectionBlock: {
        marginVertical: 12,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        marginBottom: 10,
    },

    botoesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        gap: 10,
    },
    
    buttonBadge: {
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 20,
    },
  
    buttonPill: {
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 20,
        flex: 1, 
        alignItems: 'center',
    },
    buttonActive: {
        backgroundColor: '#1D3D87',
    },
    buttonText: {
        color: '#333',
        fontWeight: '500',
        fontSize: 15,
    },
    buttonTextActive: {
        color: '#fff',
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 5,
    },
    sliderControl: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666',
    },
    sliderTrack: {
        flex: 1,
        height: 6,
        backgroundColor: '#E5E5E5',
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    sliderProgress: {
        width: '75%',
        height: '100%',
        backgroundColor: '#1D3D87',
        borderRadius: 3,
    },
    sliderThumb: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#1D3D87',
        position: 'absolute',
        left: '73%', 
    }
});