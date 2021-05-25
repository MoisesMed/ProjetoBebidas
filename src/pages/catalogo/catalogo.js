import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import Menu from '../../components/Menu'

export default function catalogo({ navigation }) {
    const arrayCerveja = [{ img: 'https://courier-images-prod.imgix.net/produc_variant/00008729_e095d6d8-7491-458c-8225-1ee8e9b76d27.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
    { img: 'https://courier-images-prod.imgix.net/produc_variant/00008725_c431fbf8-5f01-4a90-aaa1-a06cff9306e8.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
    { img: 'https://courier-images-prod.imgix.net/produc_variant/00008779_0a26ce5b-9e63-4c29-8cc0-d20099d4ae3d.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
    { img: 'https://courier-images-prod.imgix.net/produc_variant/00008735_59b64bbf-c11a-4575-a15c-db7c31080461.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
    { img: 'https://courier-images-prod.imgix.net/product/00009138_6bd85613-7f3b-4529-acc0-4e2f87dc247a.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
    { img: 'https://courier-images-prod.imgix.net/produc_variant/00008581_97b0cc1f-39fd-4af0-8749-3ea805c88365.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
    { img: 'https://courier-images-prod.imgix.net/produc_variant/00010860_9a26dc52-c05b-460e-81a7-7664dd10cc3d.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
    { img: 'https://courier-images-prod.imgix.net/produc_variant/00009870_d8874dd1-eaac-4d61-9528-4746cf573314.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' }
    ]

    const arrayDestilados = [
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00008601_94a3137c-b179-4caa-b78b-ea0620ddd897.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/product/00009518_97115052-d9fc-46c3-bc39-33b4cec15cd5.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00009256_443acb96-c3fe-46d6-a898-4c34723811fb.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00009390_41a81567-23ba-46b8-a60d-cefca5e0f266.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00011951_16eb11b3-43dd-467e-a53f-739c90b7bffc.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00012091_8741402d-b440-45d5-af48-40dd65968b50.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00010649_4e2c03f3-b88a-4c9e-bd06-6cf3e8c76fe2.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/product/00009535_44ee9903-1ddb-4a29-ad52-4b5b579bc702.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
        },
    ]

    const arrayVinho = [
        { img: 'https://courier-images-prod.imgix.net/produc_variant/00012715_90b41540-b0ee-408a-a491-06d8f0ea983c.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/produc_variant/00012803_facb19f0-30ea-4275-98a7-8b1ad03c38bd.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/produc_variant/00012759_dba07155-cb53-4d59-ba7c-4fd531cd51a2.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/produc_variant/00012747_51c0c5f0-bfbc-4b37-8c00-b5acdba4b205.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/produc_variant/00012755_e5d084aa-c512-4bad-a70c-088f8050a1be.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/produc_variant/00010938_7b1671a6-4ef6-4e2e-aef1-a6184f46641b.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' }
    ]

    const arrayPetisco = [
        { img: 'https://courier-images-prod.imgix.net/product/00009414_91d2e756-8b3b-4363-ba91-2c8c8b82eeef.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/produc_variant/00009236_7b33143c-2fa2-4f30-acb1-d0d2e0fb68e7.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/produc_variant/9638_0c38d13e-1f37-4bd4-b0b9-c0ba77e4bb92.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/product/00009456_ea34eda0-71fe-4d41-9c8c-460475206a3e.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/product/00009407_91c56ba0-0fe4-4ee5-a3e7-938ce2f13367.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' },
        { img: 'https://courier-images-prod.imgix.net/produc_variant/00012340_847d6cad-1a0e-4710-90b3-a88677418b28.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2' }
    ]


    const arraySemAlcool = [
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00008601_94a3137c-b179-4caa-b78b-ea0620ddd897.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00008857_e472af8c-d5fa-45e1-9dbb-23c4f378179a.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00008916_3b19a8cb-dac9-4389-8d1f-60a160ee65d7.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00011032_76969658-1ab2-4045-8b90-08a23a23f5c4.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00008953_8fb9a97a-9e73-4bae-bbd8-dbc8f6adbfa2.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/products/8910.png?auto=compress,format&fit=max&w=undefined&h=200&dpr=2&fm=png'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00012055_77065f80-c877-4a29-b22e-f9d734e9c3c3.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2'
        },
        {
            img: 'https://courier-images-prod.imgix.net/produc_variant/00010985_5db7dd10-daad-4963-81f1-913e307f40bf.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2'
        },
    ]
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, marginBottom: 5 }}>Delivery de Bebidas</Text>
                <Text style={styles.title}>Cervejas</Text>
                <ScrollView
                    style={styles.divisoria}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {arrayCerveja.map((e, i) => (
                        <View key={i} style={{ alignItems: 'center' }}>
                            <Image source={{ uri: (e.img) }}
                                style={styles.image} />
                            <Text style={styles.nome}>Nome</Text>
                            <Text style={styles.preco}>Preço R$</Text>
                        </View>
                    ))}
                </ScrollView>

                <Text style={styles.title}>Destilados</Text>
                <ScrollView
                    style={styles.divisoria}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {arrayDestilados.map((e, i) => (
                        <View key={i} style={{ alignItems: 'center' }}>
                            <Image source={{ uri: (e.img) }}
                                style={styles.image} />
                            <Text style={styles.nome}>Nome</Text>
                            <Text style={styles.preco}>Preço R$</Text>
                        </View>
                    ))}
                </ScrollView>
                <Text style={styles.title}>Vinhos</Text>
                <ScrollView
                    style={styles.divisoria}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {arrayVinho.map((e, i) => (
                        <View key={i} style={{ alignItems: 'center' }}>
                            <Image source={{ uri: (e.img) }}
                                style={styles.image} />
                            <Text style={styles.nome}>Nome</Text>
                            <Text style={styles.preco}>Preço R$</Text>
                        </View>
                    ))}
                </ScrollView >

                <Text style={styles.title}>Sem Álcool</Text>
                <ScrollView
                    style={styles.divisoria}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {arraySemAlcool.map((e, i) => (
                        <View key={i} style={{ alignItems: 'center' }}>
                            <Image source={{ uri: (e.img) }}
                                style={styles.image} />
                            <Text style={styles.nome}>Nome</Text>
                            <Text style={styles.preco}>Preço R$</Text>
                        </View>
                    ))}
                </ScrollView>
                <Text style={styles.title}>Petiscos</Text>
                <ScrollView
                    style={styles.divisoria}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {arrayPetisco.map((e, i) => (
                        <View key={i} style={{ alignItems: 'center' }}>
                            <Image source={{ uri: (e.img) }}
                                style={styles.image} />
                            <Text style={styles.nome}>Nome</Text>
                            <Text style={styles.preco}>Preço R$</Text>
                        </View>
                    ))}
                </ScrollView>
                <Menu />
            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        padding: 2
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 15,
        borderRadius: 500,
        borderWidth: 0.5,
        backgroundColor: "black",
        borderColor: "black",
        padding: 5
    },
    title: {
        backgroundColor: "white",
        borderRadius: 50,
        padding: 7,
        marginBottom: 10,
        color: "#FF8C00",
        marginTop: 20,
        fontSize: 28,
    },
    nome: {
        paddingRight: 17,
        fontSize: 18
    },
    preco: {
        paddingRight: 15,
        fontSize: 15
    },
    divisoria: {
        // borderBottomColor: "#0000FF",
        borderWidth: 2,
        // borderTopColor: "#ADD8E6",
        // borderLeftColor: "#ADD8E6",
        // borderRightColor: "#ADD8E6",
        padding: 5,
    }

});