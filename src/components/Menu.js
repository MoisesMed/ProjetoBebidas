import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import cadastro from '../pages/cadastro/cadastro';
import login from '../pages/login/login';
import home from '../pages/home/home';
import catalogo from '../pages/catalogo/catalogo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Menu(navigation) {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('home')}>
                    <Text > Início </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('catalogo')}>
                    <Text > Catalogo </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('home')}>
                    <Text > Pedido </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('home')}>
                    <Text > Perfil </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    }, menu: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        bottom: 0
    },
    menuButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#87CEFA",
        height: 60,
        width: 100,
        borderWidth: 1,
        borderColor: "black"
    },
});