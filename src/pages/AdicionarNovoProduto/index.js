import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default function AdicionarNovoProduto(){
    return(
       
       <View style={{backgroundColor: '#FFFFFF'}}>
           <Text style={styles.texto}>Título do produto:</Text>
           <View style={styles.botaoAdicionarMargem}> 
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        placeholder="Escreva aqui o nome do produto..."
                    />
                </View>
            </View> 
            <Text style={styles.texto}>Descrição do produto:</Text>
           <View style={styles.botaoAdicionarMargem}> 
                <View style={styles.inputAreaDetalhes}>
                    <TextInput
                        multiline={true}
                        autoCorrect={false}
                        style={styles.inputDetalhes}
                        placeholder="Escreva aqui os detalhes do produto..."
                    />
                </View>
            </View> 
            <Text style={styles.texto}>Selecione uma opção:</Text>
            <View style={styles.botaoAdicionarMargem}> 
                <View style={styles.inputArea}>
                    <Text>R$</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0,00"
                    />
                </View>
            </View>
            <View style={styles.botaoAdicionarMargem}> 
                <TouchableOpacity style={styles.btn} onPress={()=>MeusProdutos()}>
                    <Text style={styles.textoBotao}>Cadastrar produto</Text>  
                </TouchableOpacity>
            </View>
            <View style={styles.botaoAdicionarMargem}> 
                <TouchableOpacity style={styles.btn} onPress={()=>VoltarDeOndeParou()}>
                    <Text style={styles.textoBotao}>Cancelar</Text>  
                </TouchableOpacity>
            </View>
       </View>         
    );
}

const styles = StyleSheet.create({
    texto: {
      paddingHorizontal: 15,
      fontFamily: "Inter", 
      fontStyle: "normal",
      fontSize: 15,
      lineHeight: 20,
      color: "#000000",
    },
    botaoAdicionarMargem:{
        paddingHorizontal: 15, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 10,
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFFFFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
    }, 
    inputAreaDetalhes:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '98%',
        backgroundColor: '#ffffff',
        elevation: 2,
        paddingHorizontal: 10,
        height: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
    }, 
   input:{
       fontFamily: 'Roboto',
        paddingHorizontal: 10,
        fontSize: 15,
        width: '98%'
    },
    inputDetalhes:{
         fontFamily: 'Roboto',
         fontSize: 15,
         marginLeft: 1,
         marginRight: 1,
         marginTop: 1,
         backgroundColor: '#FFFFFF',
         padding: 10,
         textAlignVertical: 'top',
         color: '#000000',
     },
    textoBotao:{
        color: '#FFFFFF', //cor do texto
        fontWeight: 'bold', //texto em negrito
        fontSize:20, //tamanho do texto
        textAlign: 'center', // alinha texto dentro da borda, ao centro
    },
    btn:{
        width: 250, //largura
        height: 40, //altura 
        backgroundColor: '#000000', //cor dentro da borda, onde vai ser incluído o texto
        borderRadius: 10, // circunferência da borda
        justifyContent: 'center', //centraliza o texto ao meio da borda
    }

});