import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },
    boxTitulo: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4EBFFF'
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    },
    boxForm: {
        flex: 5,
        paddingTop: 20
    },
    Entradas: {
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        width: 300,
        borderColor: '#4EBFFF'
    },
    boxItens: {
        flex: 3,
        marginTop: 85
    },
    boxBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoConfir: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#117CDF',
        width: 300,
        height: 30
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 500,
        borderWidth: 0.5,
        backgroundColor: "black",
        borderColor: "black",
        padding: 5
    },

});

export default styles;