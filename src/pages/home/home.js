import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Menu from '../../components/Menu'

export default function home(props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>E-Drink</Text>
            </View>
            <View style={styles.boxImagem}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    directionalLockEnabled={true}
                >
                    <View style={{ paddingLeft: 15, paddingTop: 15 }}>
                        <Image
                            source={{ uri: 'https://veja.abril.com.br/wp-content/uploads/2018/11/saide-cerveja-gim-20180225-004.jpg' }} style={styles.image} />
                    </View>
                    <View style={{ paddingLeft: 15, paddingTop: 15 }}>
                        <Image
                            source={{ uri: 'https://alimentusconsultoria.com.br/wp-content/uploads/2019/08/Consolid%C3%A7%C3%A3o-de-normas-e-bebidas.png' }} style={styles.image} />
                    </View>
                    <View style={{ paddingLeft: 15, paddingTop: 15 }}>
                        <Image
                            source={{ uri: 'https://franquiasparaempreender.com.br/wp-content/uploads/2019/04/empreender-distribuidora-bebidas.jpeg' }} style={styles.image} />
                    </View>
                    <View style={{ paddingLeft: 15, paddingTop: 15 }}>
                        <Image
                            source={{ uri: 'https://minhasaude.proteste.org.br/wp-content/uploads/2019/12/74599606_m-970x472.jpg' }} style={styles.image} />
                    </View>

                </ScrollView>
            </View >
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: "45%", borderRadius: 10, borderColor: "#4EBFFF", backgroundColor: "#fff" }} >
                    <Text style={styles.promoTitle}>Promoção do dia</Text>
                    <View style={{}}>
                        <Image
                            source={require('../../../assets/beats.jpg')} style={styles.promoItem} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: "45%", borderRadius: 10, borderColor: "#4EBFFF", backgroundColor: "#fff" }} >
                    <Text style={styles.promoTitle}>Mais comprado</Text>
                    <View style={{}}>
                        <Image
                            source={require('../../../assets/corote.jpg')} style={styles.promoItem} />
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: "row" }}>
                <Image
                    source={require('../../../assets/mercado.png')} style={styles.mercado} />
                <View>
                    <Image
                        source={require('../../../assets/frete.png')} style={styles.frete} />
                    <Text style={{ width: 155, justifyContent: 'center', alignItems: 'center' }}>Frete grátis em compras</Text>
                    <Text style={{ width: 155, justifyContent: 'center', alignItems: 'center', paddingLeft: 27 }}>acima de 150R$</Text>
                </View>
            </View>
            <Menu {...props} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    image: {
        resizeMode: "cover",
        width: 300,
        height: 200,
        borderRadius: 15,
    },
    boxImagem: {
        flex: 4,
        alignItems: "center",

    },
    containerTop: {
        paddingTop: 20,
        alignItems: "center",
        backgroundColor: "#4EBFFF"
    },
    frete: {
        marginTop: "50%",
        marginRight: 35,
        width: 100,
        height: 50,
        marginLeft: 15,
    },
    mercado: {
        marginRight: "15%",
        width: 150,
        height: 50,
        marginBottom: 20,
    },
    promoTitle: {
        margin: 5,
        fontSize: 17
    },
    promoItem: {
        marginBottom: 10,
        width: 100,
        height: 100
    },
});