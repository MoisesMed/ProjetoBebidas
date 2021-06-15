import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import Misc from '../../components/Misc';

export default function login({ navigation }) {
 
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
      
     async function login() {
        auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            navigation.navigate('home');
        })
        .catch(error => {
            if (error.code === "auth/invalid-email") {
                Misc.showToast("E-mail inválido");
            } else if (error.code === 'auth/user-not-found') {                
                Misc.showToast('Usuário inexistente');
            } else if (error.code === 'auth/wrong-password') {                
                Misc.showToast('Senha incorreta');
            } else {
                console.log(error.code);
                Misc.showToast(error.code);
            }
        })
      }

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/logo.png')} />
                <Text style={styles.titulo}>Login</Text>
            </View>
            <View style={styles.containerMid}>
                <Text style={styles.tituloCampo}>Email</Text>
                <TextInput style={{ width: 200, borderRadius: 5, backgroundColor: "white", marginTop: 6, marginBottom: 3, }} value={email} onChangeText={onChangeEmail}  />
                <Text style={styles.tituloCampo}>Senha</Text>
                <TextInput style={{ width: 200, borderRadius: 5, backgroundColor: "white", marginTop: 6 }} value={password} onChangeText={onChangePassword} />
            </View>
            <View style={styles.containerBottom}>
                <Button onPress={() => login()}
                    title="Login"
                    style={{ fontSize: 10 }}
                />
                <View style={styles.jaTemConta}>
                    <Text style={styles.jaTemConta}>Ainda não tem conta?
                </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
                        <Text style={styles.entreAqui}> Crie aqui! </Text>
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