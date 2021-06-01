import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Menu(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('home')}>
                    <Text > Início </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('catalogo')}>
                    <Text > Catalogo </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('carrinho')}>
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
    },
    menu: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100%",
        bottom: 0
    },
    menuButton: {
        width: "25%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#87CEFA",
        height: 60,
        borderWidth: 1,
        borderColor: "black"
    },
});