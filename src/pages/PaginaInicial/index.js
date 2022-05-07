import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import Pesquisar from '../Pesquisar';
import NovosProdutos from '../../components/ListProdutos';


export default function PaginaInicial(){
    return(
        <ScrollView 
         showsHorizontalScrollIndicator={false}
         style={{backgroundColor: '#FFFFFF'}} //cor na parte interna da página inicial
        >
            <View style={styles.botaoPesquisar}> 
                <View style={styles.inputArea}>
                    <Icon name="search" size={20} color="#000000" />
                    <TextInput
                    placeholder="Pesquisar / Pesquise aqui..."
                    style={styles.input}
                    />
                </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15}}>
                <NovosProdutos
                    cover={require('../../assets/logo.png')}
                    name="Tênis branco"
                    onPress={() => {}}
                
                />
                

            </ScrollView>


          <Text>Aqui vai a pagina inicial</Text>
          <Image style={styles.ListaItens} source={require('../../../src/assets/logo.png')} />
          <Image style={styles.ListaItens} source={require('../../../src/assets/logo.png')} />

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    botaoPesquisar:{
        paddingHorizontal: 15, //distancia das bordas do input, lado esquero e direito
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#C4C4C4',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    }, 
   input:{
       fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 15,
        width: '98%'
    },
   
    

    ListaItens: {
        width: 96,
        height: 118,
    }
});

