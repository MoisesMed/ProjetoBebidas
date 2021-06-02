import React from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Button, Image } from 'react-native';
import styles from './styleCarrinho';
import Menu from '../../components/Menu'

export default function carrinho(props) {


   /* const state = {
        dados:{
            logradouro:''
        }
    }*/
    //const [dados = {logradouro:''},onChangeDados] = React.useState({logradouro:''});
    const [cep, onChangeCep] = React.useState(null);
    const [dados,onChangeDados] = React.useState({"bairro": "Messejana", "cep": "60842-250", "complemento": "", "ddd": "85", "gia": "", "ibge": "2304400", "localidade": "Fortaleza", "logradouro": "Rua Paulo Setubal", "siafi": "1389", "uf": "CE"});
    const [logradouro,onChangeLogradouro] = React.useState('');

    async function buscarCEP() {
       fetch(`https://viacep.com.br/ws/${cep}/json`)
       .then(resposta => resposta.json()) 
       .then(data =>{
           console.log(data);
           onChangeDados(data);
           console.log(dados);
           onChangeLogradouro(dados.logradouro);
           console.log(dados.logradouro);
       } )
       //.then(data => {React.setState({dados: data})})
       .catch(erro =>{console.log(erro)})
      };



    const arrayPedido = [{
        img: 'https://prod.liveshare.vsengsaas.visualstudio.com/join?56B7954FB7DAD0EB054FA27C1E1A22580430',
        nome: 'heineken',
        preco: '2.90',
        quant: '1'
    },
    {
        img: 'https://courier-images-prod.imgix.net/produc_variant/00008601_94a3137c-b179-4caa-b78b-ea0620ddd897.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
        nome: 'teste',
        preco: '3.50',
        quant: '3'
    },
    {
        img: 'https://courier-images-prod.imgix.net/produc_variant/00008601_94a3137c-b179-4caa-b78b-ea0620ddd897.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
        nome: 'teste',
        preco: '3.50',
        quant: '2'
    },
    {
        img: 'https://courier-images-prod.imgix.net/produc_variant/00008601_94a3137c-b179-4caa-b78b-ea0620ddd897.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
        nome: 'teste',
        preco: '3.50',
        quant: '3'
    },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.boxTitulo}>
                <Text style={styles.titulo}>Carrinho</Text>
            </View>
            <View></View>
            <View style={styles.boxForm}>
                <Text style={{ marginLeft: 15 }}>CEP</Text>
                <View style={{ flexDirection: 'row', marginBottom: 5, }}>
                    <TextInput style={{ marginLeft: 15, backgroundColor: 'white', width: 100, borderColor: '#4EBFFF' }}value={cep} onChangeText={onChangeCep}></TextInput>
                    <TouchableOpacity style={{ marginLeft: 15, backgroundColor: '#4EBFFF', width: 110, justifyContent: 'center', alignItems: 'center' }}
                     onPress={() => buscarCEP()}>
                    <Text>Consultar CEP</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginLeft: 15 }}  >Logradouro</Text>
                <TextInput style={styles.Entradas}value={logradouro} onChangeText={onChangeLogradouro}></TextInput>
                <Text style={{ marginLeft: 15 }}>Bairro</Text>
                <TextInput style={styles.Entradas}></TextInput>
                <Text style={{ marginLeft: 15, marginBottom: 5 }}>Numero</Text>
                <TextInput style={{ marginLeft: 15, backgroundColor: 'white', width: 100, borderColor: '#4EBFFF', marginBottom: 5 }}></TextInput>
                <Text style={{ marginLeft: 15 }}>Complemento</Text>
                <TextInput style={styles.Entradas}></TextInput>
            </View>
            <View style={styles.boxItens}>
                <View style={{ alignItems: 'center', backgroundColor: '#4EBFFF' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, color: 'white' }}>Itens da Compra</Text>
                </View>
                <ScrollView>
                    {arrayPedido.map((e, i) => (
                        <View key={i} style={{ alignItems: 'center', flexDirection: 'row', paddingTop: 15 }}>
                            <Image source={{ uri: (e.img) }} style={styles.image} />
                            <Text>{e.nome}</Text>
                            <Text style={{ paddingLeft: 20 }}>R$ {e.preco}</Text>
                            <Text style={{ paddingLeft: 20 }}>Quant: {e.quant}</Text>
                        </View>
                    ))}

                </ScrollView>
                <View style={styles.boxBtn}>
                    <TouchableOpacity style={styles.botaoConfir}>
                        <Text>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Menu {...props} />
        </View>
    );
}