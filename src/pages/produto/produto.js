import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Menu from '../../components/Menu';
import Misc from '../../components/Misc';
import firestore from '@react-native-firebase/firestore';

class produto extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            textoBotao: 'Adicionar',
            quantidade: 1,
            item: this.props.route.params.item,
            categoria: this.props.route.params.categoria,
            refDB: firestore().collection('carrinho'),
            arrayCarrinho: []
        }
        this.obterCarrinhoAtual();
    }

    obterObjeto(id, produto, quantidade, preco) {
        const objeto = {
            'id': id,
            'produto': produto,
            'quantidade': quantidade,
            'preco': preco
        }
        return objeto;
    }

    insereObjeto() {
        const objeto = {
            'produto': firestore().collection('produto').doc(this.state.item.id),
            'quantidade': this.state.quantidade,
            'preco': this.state.item.preco,
            'descricao': this.state.item.descricao,
            'imagem': this.state.item.imagem === undefined ? '' : this.state.item.imagem
        }
        return objeto;
    }

    resgataObjetoCarrinho() {
        let objeto = this.state.arrayCarrinho.find(produto => produto.produto === this.state.item.id);
        return objeto;
    }

    obterTextoBotao() {
        const objeto = this.resgataObjetoCarrinho();
        let mensagem = '';

        if (objeto === undefined) {
            mensagem = 'Adicionar';
        } else {
            mensagem = 'Atualizar';
        }

        this.setState({ textoBotao: mensagem });
    }

    async obterCarrinhoAtual() {
        const arrCarrinho = [];
        await firestore().collection("carrinho").get()
            .then(querySnapshot => {
                querySnapshot.docs.forEach(doc => {
                    arrCarrinho.push(this.obterObjeto(doc.id, doc.data().produto.id, doc.data().quantidade, doc.data().preco));
                    if (doc.data().produto.id === this.state.item.id) {
                        this.setState({ quantidade: doc.data().quantidade });
                    }
                });
            });
        this.setState({ arrayCarrinho: arrCarrinho });
        this.obterTextoBotao();
    }

    setQuantidade(quantidade) {
        let quant = this.state.quantidade + quantidade;

        if (quant <= 0) {
            quant = 1;
        }

        this.setState({ quantidade: quant })
    }

    redirecionarParaCatalogo(){
        this.props.navigation.navigate('catalogo');
    }

    async adicionaAtualizaCarrinho() {
        let objeto = this.resgataObjetoCarrinho();

        if (objeto === undefined) {
            this.state.refDB
                .add(this.insereObjeto())
                .then((res) => {
                    this.obterCarrinhoAtual();
                    Misc.showToast('Produto adicionado com sucesso!');
                })
                .catch((err) => {
                    Misc.showToast('Erro ao adicionar: ' + err);
                    console.error("Error found: ", err);
                });
        } else {
            this.state.refDB
                .doc(objeto.id)
                .update(this.insereObjeto())
                .then((res) => {
                    this.obterCarrinhoAtual();
                    Misc.showToast('Produto atualizado com sucesso!');
                })
                .catch((err) => {
                    Misc.showToast('Erro ao atualizar: ' + err);
                    console.error("Error found: ", err);
                });
        }
        this.redirecionarParaCatalogo();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <View style={{ backgroundColor: "#87CEFA", marginTop: 30, justifyContent: "center", alignItems: "center", width: 450 }}>
                        <Text style={{ padding: 5, fontSize: 19, color: "white" }}>E-Drink</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", width: 450, borderBottomColor: "#87CEFA", borderBottomWidth: 4 }}>
                        <Text style={{ fontSize: 17 }}>{this.state.item.descricao}</Text>
                    </View>
                </View>
                <View style={styles.containerMid}>
                    <Image
                        style={styles.image}
                        source={{ uri: (this.state.item.imagem) }} />
                    <View style={{ width: 300, borderWidth: 1, borderRadius: 15, justifyContent: "center", alignItems: "flex-start", backgroundColor: "#87CEFA" }}>
                        <Text style={styles.des}>Preço: R$ {this.state.item.preco} </Text>
                        <Text style={styles.des}>Detalhes: {this.state.item.detalhe}</Text>
                        <Text style={styles.des}>Categoria: {this.state.categoria}</Text>
                        <Text style={styles.des}>Resumo: {this.state.item.resumo}</Text>
                    </View>
                </View>
                <View style={styles.containerBottom}>
                    <View style={{ backgroundColor: "#87CEFA", height: 40, justifyContent: "center", alignItems: "center", flexDirection: "row", width: "45%", padding: 5, margin: 5, borderRadius: 15, borderWidth: 1 }}>
                        <TouchableOpacity onPress={() => this.setQuantidade(-1)}
                            style={{ fontSize: 17, backgroundColor: "#6495ED", width: 30, borderRadius: 50, padding: 3, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                            <Text>-</Text>
                        </TouchableOpacity >
                        <Text style={{ padding: 5 }}> {this.state.quantidade} </Text>
                        <TouchableOpacity onPress={() => this.setQuantidade(+1)}
                            style={{ fontSize: 17, backgroundColor: "#6495ED", width: 30, borderRadius: 50, padding: 3, justifyContent: "center", alignItems: "center", marginLeft: 10 }}>
                            <Text>+</Text>
                        </TouchableOpacity >
                    </View>
                    <View style={{ backgroundColor: "#87CEFA", height: 40, justifyContent: "center", alignItems: "center", flexDirection: "row", width: "45%", padding: 5, margin: 5, borderRadius: 15, borderWidth: 1 }}>
                        <TouchableOpacity onPress={() => this.adicionaAtualizaCarrinho()}
                            style={{ fontSize: 25, borderRadius: 10, padding: 5, width: 120, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}> {this.state.textoBotao} </Text>
                        </TouchableOpacity >
                    </View>
                </View>
                <Menu  {...this.props} />
                <StatusBar style="auto" />
            </View >
        );
    }
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

export default produto;