import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function login() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/logo.jpeg')} />
                <Text style={styles.titulo}>Login</Text>
            </View>
            <View style={styles.containerMid}>
                <Text style={styles.tituloCampo}>Email</Text>
                <TextInput style={{ width: 200, borderRadius: 10, backgroundColor: "white", marginTop: 6, marginBottom: 3, }} />
                <Text style={styles.tituloCampo}>Senha</Text>
                <TextInput style={{ width: 200, borderRadius: 10, backgroundColor: "white", marginTop: 6 }} />
            </View>
            <View style={styles.containerBottom}>
                <Button
                    title="Cadastre-se"
                    style={styles.button}
                />
                <Text style={styles.jaTemConta}>Já tem uma conta? Entre Aqui </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        padding: 50
    },
    containerTop: {
        marginTop: 30,
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    containerMid: {
        marginTop: 30,
        padding: 10,
        flex: 2,
    },
    containerBottom: {
        width: 300,
        flex: 2,
        marginTop: 25,
        marginBottom: -50,
    },
    titulo: {
        marginTop: 10,
        marginBottom: 30,
        fontSize: 25,
        fontWeight: "bold",
    },
    tituloCampo: {
        alignItems: 'flex-start',
        fontWeight: '600',
        fontSize: 17,
    },
    jaTemConta: {
        marginTop: "5%",
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 27
    },
    image: {
        resizeMode: "contain",
        width: 200,
        height: 200,
    },
});