import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import Menu from '../../components/Menu'

export default function produto(props) {

    const [qtd, setQtd] = React.useState(1)

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={{ backgroundColor: "#87CEFA", marginTop: 30, justifyContent: "center", alignItems: "center", width: 450 }}>
                    <Text style={{ padding: 5, fontSize: 19, color: "white" }}>E-Drink</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", width: 450, borderBottomColor: "#87CEFA", borderBottomWidth: 4 }}>
                    <Text style={{ fontSize: 17 }}>Corote</Text>
                </View>
            </View>
            <View style={styles.containerMid}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/corote.jpg')} />
                <View style={{ width: 300, borderWidth: 1, borderRadius: 15, justifyContent: "center", alignItems: "flex-start", backgroundColor: "#87CEFA" }}>
                    <Text style={styles.des}>Preço: R$2,69</Text>
                    <Text style={styles.des}>Detalhes: 320mg Unid</Text>
                    <Text style={styles.des}>Categoria: Cerveja</Text>
                    <Text style={styles.des}>Resumo: resumo aqui...</Text>
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View style={{ backgroundColor: "#87CEFA", height: 40, justifyContent: "center", alignItems: "center", flexDirection: "row", width: "45%", padding: 5, margin: 5, borderRadius: 15, borderWidth: 1 }}>
                    <TouchableOpacity onPress={() => setQtd(qtd - 1)}
                        style={{ fontSize: 17, backgroundColor: "#6495ED", width: 30, borderRadius: 50, padding: 3, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                        <Text>-</Text>
                    </TouchableOpacity >
                    <Text style={{ padding: 5 }}>{qtd}</Text>
                    <TouchableOpacity onPress={() => setQtd(qtd + 1)}
                        style={{ fontSize: 17, backgroundColor: "#6495ED", width: 30, borderRadius: 50, padding: 3, justifyContent: "center", alignItems: "center", marginLeft: 10 }}>
                        <Text>+</Text>
                    </TouchableOpacity >
                </View>
                <View style={{ backgroundColor: "#87CEFA", height: 40, justifyContent: "center", alignItems: "center", flexDirection: "row", width: "45%", padding: 5, margin: 5, borderRadius: 15, borderWidth: 1 }}>
                    <TouchableOpacity onPress={() => setQtd(qtd - 1)}
                        style={{ fontSize: 25, borderRadius: 10, padding: 5, width: 120, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white" }}>Adicionar</Text>
                    </TouchableOpacity >
                </View>
            </View>
            <Menu  {...props} />
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
    },
    containerTop: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    containerMid: {
        marginTop: -50,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 7,
    },
    containerBottom: {
        flexDirection: "row",
        height: 10,
        flex: 1,
    },
    des: {
        padding: 7,
        marginLeft: 0,
        color: "white"
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 15
    }
});