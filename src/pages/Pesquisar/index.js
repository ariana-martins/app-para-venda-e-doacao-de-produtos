import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Pesquisar(){
    return(
       
       <View style={{backgroundColor: '#46C227'}}>
           <View style={styles.botaoPesquisar}> 
                <View style={styles.inputArea}>
                    <Icon name="search" size={20} color="#000000" />
                    <TextInput
                        placeholder="Pesquisar / Pesquise aqui..."
                        style={styles.input}
                    />
                </View>
            </View>            
            <Text>Aqui vai a pagina de filtrar e pesquisar</Text>
       </View>         
    );
}

const styles = StyleSheet.create({
    botaoPesquisar:{
        paddingHorizontal: 15, 
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
});