import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Icon, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Menu from '../../components/Menu'

export default function home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>E-Drink</Text>
            </View>
            <View style={styles.boxImagem}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Image
                        source={require('../../../assets/logo.png')} style={styles.image} />
                </ScrollView>
            </View>
            <Menu />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    image: {
        resizeMode: "contain",
        width: 250,
        height: 250
    },
    boxImagem: {
        flex: 4,
        paddingTop: 25,
        alignItems: "center"
    },
    containerTop: {
        paddingTop: 20,
        alignItems: "center",
        backgroundColor: "#4EBFFF"
    }
});