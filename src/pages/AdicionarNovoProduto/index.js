import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';


export default function AdicionarNovoProduto(){

    const [isSelected, setSelection] = React.useState(false);

    return(
       
       <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
           <View>
               <Button style={styles.addFotos}
               icon="camera" 
               mode="contained" 
               color="#FFFFFF" 
               onPress={()=> {}}>
                   Adicionar fotos   
               </Button>
           </View>

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
            <View>
                <View style={styles.checkboxOpcoes}>
                    <Checkbox
                        status={isSelected ? 'unchecked' : 'checked'} 
                        onPress={() => {
                            setSelection(!isSelected);
                        }}
                        color="#000000"
                    />
                    <Text style={styles.label}>PARA DOAR</Text> 
                    
                    <Checkbox
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setSelection(!isSelected);
                        }}
                        color="#000000"
                    />
                    <Text style={styles.label}>PARA VENDER
                    {isSelected ? " acrescente um valor" : " "}</Text>
                </View>
            </View>

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
    addFotos: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#000000",
        borderStyle: 'dashed',
        marginVertical: 10,
        margin: 20,
    },
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
        height: 100,
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
     checkboxOpcoes:{
        flexDirection: "row",
        marginBottom: 5,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
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