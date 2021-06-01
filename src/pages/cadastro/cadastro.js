import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';

export default function cadastro({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Button onPress={() => navigation.navigate('produto')}
                    title="produto"
                    style={{ fontSize: 10 }}
                />
                <Image
                    style={styles.image}
                    source={require('../../../assets/logo.png')} />
                <Text style={styles.titulo}>Cadastro</Text>
            </View>
            <View style={styles.containerMid}>
                <Text style={styles.tituloCampo}>Nome</Text>
                <TextInput style={{ width: 200, borderRadius: 10, backgroundColor: "white", marginTop: 6, marginBottom: 3, }} />
                <Text style={styles.tituloCampo}>Email</Text>
                <TextInput style={{ width: 200, borderRadius: 10, backgroundColor: "white", marginTop: 6, marginBottom: 3, }} />
                <Text style={styles.tituloCampo}>Senha</Text>
                <TextInput style={{ width: 200, borderRadius: 10, backgroundColor: "white", marginTop: 6 }} />
            </View>
            <View style={styles.containerBottom}>
                <Button onPress={() => navigation.navigate('home')}
                    title="Cadastro"
                    style={{ fontSize: 10 }}
                />
                <View style={styles.jaTemConta}>
                    <Text style={styles.jaTemConta}>Ja tem conta?
                </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('catalogo')}>
                        <Text style={styles.entreAqui}> Entre aqui! </Text>
                    </TouchableOpacity>
                </View>
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
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: -30
    },
    containerMid: {
        marginTop: 30,
        padding: 10,
        flex: 2,
        marginBottom: 65
    },
    containerBottom: {
        width: 300,
        flex: 2,
        marginTop: 25,
        marginBottom: -50,
    },
    titulo: {
        marginTop: -25,
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
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        fontSize: 18,
        fontWeight: "500",
        flexDirection: "row"
    },
    entreAqui: {
        color: "blue",
        marginTop: 5,
        fontSize: 18,
        fontWeight: "500",
        flexDirection: "row"
    },
    image: {
        resizeMode: "contain",
        width: 200,
        height: 200,
    },
});