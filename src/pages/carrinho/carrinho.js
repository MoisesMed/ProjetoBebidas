import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Button, Image, FlatList } from 'react-native';
import styles from './styleCarrinho';
import Menu from '../../components/Menu';
import Misc from '../../components/Misc';
import firestore from '@react-native-firebase/firestore';

class carrinho extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cep: '',
            dados: {},
            logradouro: '',
            bairro: '',
            complemento: '',
            numero: '',
            refDB: firestore().collection('pedido'),
            arrayCarrinho: []
        }

        this.obterCarrinhoAtual();
    }

    obterObjeto(produto, descricao, quantidade, preco, imagem) {
        const objeto = {
            'produto': produto,
            'descricao': descricao,
            'quantidade': quantidade,
            'preco': preco,
            'imagem': imagem
        }
        return objeto;
    }

    async obterCarrinhoAtual() {
        const arrCarrinho = [];
        await firestore().collection("carrinho").get()
            .then(querySnapshot => {
                querySnapshot.docs.forEach(doc => {
                    arrCarrinho.push(this.obterObjeto(doc.data().produto.id, doc.data().descricao,
                        doc.data().quantidade, doc.data().preco, doc.data().imagem));
                });
            });
        this.setState({ arrayCarrinho: arrCarrinho });
    }


    async buscarCEP() {
        this.setState({ logradouro: '' });
        this.setState({ bairro: '' });
        this.setState({ complemento: '' });
        this.setState({ numero: '' });

        if (this.state.cep != '') {
            fetch(`https://viacep.com.br/ws/${this.state.cep}/json`)
                .then(resposta => resposta.json())
                .then(data => {
                    this.setState({ dados: data })
                    this.setState({ logradouro: data.logradouro });
                    this.setState({ bairro: data.bairro });
                    this.setState({ complemento: data.complemento });
                })
                .catch(erro => { Misc.showToast(erro) })
        }
    };

    obterItemLista(item) {
        return (
            <View style={{ alignItems: 'center', flexDirection: 'row', paddingTop: 15 }}>
                <Image source={{ uri: (item.imagem) }} style={styles.image} />
                <Text>{item.descricao}</Text>
                <Text style={{ paddingLeft: 20 }}>R$ {item.preco} </Text>
                <Text style={{ paddingLeft: 20 }}>Quant: {item.quantidade} </Text>
            </View>
        )
    }

    obterValorTotalPedido() {
        let valorTotal = 0.0;
        for (let index = 0; index < this.state.arrayCarrinho.length; index++) {
            const item = this.state.arrayCarrinho[index];
            valorTotal = valorTotal + (item.quantidade * item.preco);
        }
        return valorTotal;
    }

    insereObjeto() {
        const objeto = {
            'total': this.obterValorTotalPedido(),
            'carrinho': this.state.arrayCarrinho,
            'endereco': this.state.dados
        }
        return objeto;
    }

    validarCamposObrigatorios() {
        if (this.state.cep === '') {
            Misc.showToast('Necessário informar o CEP!');
            return false;
        }

        if (this.state.logradouro === '') {
            Misc.showToast('Necessário informar o Logradouro!');
            return false;
        }

        if (this.state.bairro === '') {
            Misc.showToast('Necessário informar o Bairro!');
            return false;
        }

        if (this.state.numero === '') {
            Misc.showToast('Necessário informar o Numero!');
            return false;
        }

        return true;
    }

    async apagarCarrinho() {
        await firestore().collection("carrinho").get()
            .then(querySnapshot => {
                querySnapshot.docs.forEach(doc => {
                    doc.ref.delete();
                });
            });
    }

    async finalizarPedido() {
        if (this.validarCamposObrigatorios()) {
            this.state.refDB
                .add(this.insereObjeto())
                .then((res) => {
                    this.apagarCarrinho();
                    Misc.showToast('Pedido Finalizado');
                    this.redirecionaHome();
                })
                .catch((err) => {
                    Misc.showToast('Erro ao adicionar: ' + err);
                    console.error("Error found: ", err);
                });
        }
    }

    redirecionaHome() {
        this.props.navigation.navigate('home');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxTitulo}>
                    <Text style={styles.titulo}>Carrinho</Text>
                </View>
                <View></View>
                <View style={styles.boxForm}>
                    <Text style={{ marginLeft: 15 }}>CEP</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 5, }}>
                        <TextInput style={{ marginLeft: 15, backgroundColor: 'white', width: 100, borderColor: '#4EBFFF' }} value={this.state.cep} onChangeText={cep => { this.setState({ cep }) }}></TextInput>
                        <TouchableOpacity style={{ marginLeft: 15, backgroundColor: '#4EBFFF', width: 110, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => this.buscarCEP()}>
                            <Text>Consultar CEP</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginLeft: 15 }}  >Logradouro</Text>
                    <TextInput style={styles.Entradas} value={this.state.logradouro} onChangeText={logradouro => { this.setState({ logradouro }) }}></TextInput>
                    <Text style={{ marginLeft: 15 }}>Bairro</Text>
                    <TextInput style={styles.Entradas} value={this.state.bairro} onChangeText={bairro => { this.setState({ bairro }) }}></TextInput>
                    <Text style={{ marginLeft: 15, marginBottom: 5 }}>Numero</Text>
                    <TextInput style={{ marginLeft: 15, backgroundColor: 'white', width: 100, borderColor: '#4EBFFF', marginBottom: 5 }} value={this.state.numero} onChangeText={numero => { this.setState({ numero }) }}></TextInput>
                    <Text style={{ marginLeft: 15 }}>Complemento</Text>
                    <TextInput style={styles.Entradas} value={this.state.complemento} onChangeText={complemento => { this.setState({ complemento }) }}></TextInput>
                </View>
                <View style={styles.boxItens}>
                    <View style={{ alignItems: 'center', backgroundColor: '#4EBFFF' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18, color: 'white' }}>Itens da Compra</Text>
                    </View>
                    <FlatList
                        style={styles.divisoria}
                        data={this.state.arrayCarrinho}
                        renderItem={({ item }) => this.obterItemLista(item)}
                        keyExtractor={(item, index) => index.toString()} />
                    <View style={styles.boxBtn}>
                        <TouchableOpacity style={styles.botaoConfir} onPress={() => this.finalizarPedido()}>
                            <Text>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Menu {...this.props} />
            </View>
        );
    }
}
export default carrinho;