import React from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Button, Image } from 'react-native';
import styles from './styleCarrinho';
import Menu from '../../components/Menu'

class carrinho extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cep: '',
            dados: {},
            logradouro: '',
            bairro: '',
            complemento: '',
            numero: ''
        }
    }


    buscarCEP = () => {
        this.setState({ logradouro: '' });
        this.setState({ bairro: '' });
        this.setState({ complemento: '' });
        this.setState({ numero: '' });

        fetch(`https://viacep.com.br/ws/${this.state.cep}/json`)
            .then(resposta => resposta.json())
            .then(data => {
                console.log(data);
                this.setState({ dados: data })
                this.setState({ logradouro: data.logradouro });
                this.setState({ bairro: data.bairro });
                this.setState({ complemento: data.complemento });
            })
            .catch(erro => { console.log(erro) })
    };

    // const arrayPedido = [{
    //     img: 'https://prod.liveshare.vsengsaas.visualstudio.com/join?56B7954FB7DAD0EB054FA27C1E1A22580430',
    //     nome: 'heineken',
    //     preco: '2.90',
    //     quant: '1'
    // },
    // {
    //     img: 'https://courier-images-prod.imgix.net/produc_variant/00008601_94a3137c-b179-4caa-b78b-ea0620ddd897.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
    //     nome: 'teste',
    //     preco: '3.50',
    //     quant: '3'
    // },
    // {
    //     img: 'https://courier-images-prod.imgix.net/produc_variant/00008601_94a3137c-b179-4caa-b78b-ea0620ddd897.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
    //     nome: 'teste',
    //     preco: '3.50',
    //     quant: '2'
    // },
    // {
    //     img: 'https://courier-images-prod.imgix.net/produc_variant/00008601_94a3137c-b179-4caa-b78b-ea0620ddd897.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
    //     nome: 'teste',
    //     preco: '3.50',
    //     quant: '3'
    // },
    // ]

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
                            onPress={this.buscarCEP}>
                            <Text>Consultar CEP</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginLeft: 15 }}  >Logradouro</Text>
                    <TextInput style={styles.Entradas} value={this.state.logradouro} onChangeText={logradouro => { this.setState({ logradouro }) }}></TextInput>
                    <Text style={{ marginLeft: 15 }}>Bairro</Text>
                    <TextInput style={styles.Entradas} value={this.state.bairro} onChangeText={bairro => { this.setState({ bairro }) }}></TextInput>
                    <Text style={{ marginLeft: 15, marginBottom: 5 }}>Numero</Text>
                    <TextInput style={{ marginLeft: 15, backgroundColor: 'white', width: 100, borderColor: '#4EBFFF', marginBottom: 5 }}></TextInput>
                    <Text style={{ marginLeft: 15 }}>Complemento</Text>
                    <TextInput style={styles.Entradas} value={this.state.complemento} onChangeText={complemento => { this.setState({ complemento }) }}></TextInput>
                </View>
                <View style={styles.boxItens}>
                    <View style={{ alignItems: 'center', backgroundColor: '#4EBFFF' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18, color: 'white' }}>Itens da Compra</Text>
                    </View>
                    <ScrollView>
                        {/* {arrayPedido.map((e, i) => (
                        <View key={i} style={{ alignItems: 'center', flexDirection: 'row', paddingTop: 15 }}>
                            <Image source={{ uri: (e.img) }} style={styles.image} />
                            <Text>{e.nome}</Text>
                            <Text style={{ paddingLeft: 20 }}>R$ {e.preco}</Text>
                            <Text style={{ paddingLeft: 20 }}>Quant: {e.quant}</Text>
                        </View>
                    ))} */}

                    </ScrollView>
                    <View style={styles.boxBtn}>
                        <TouchableOpacity style={styles.botaoConfir}>
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