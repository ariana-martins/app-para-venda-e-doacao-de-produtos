import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ListProdutos(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image
                source={props.cover} //configura p/ imagem clicável na Página Inicial
                style={styles.cover}
            />
            
            <View style={styles.content}>
                <Text style={styles.title}>{props.name}</Text> 
            </View>

            <View style={styles.valorDesc}>
                <View>
                    <Text>R$ 0,00</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30, //margem superior, acima das primeiras imagens
        backgroundColor: '#C4C4C4', //cor do retangulo, abaixo da image
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },
    cover:{
        width: 170,
        height: 110,
        borderRadius: 10,
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    title:{
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#000000'
    },
    valorDesc:{
        flexDirection: 'row',
        marginTop: '5',
        alignItems: 'center',
    },
});