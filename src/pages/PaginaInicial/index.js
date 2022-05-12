import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';

export default function PaginaInicial(){
    return(

        //cor na parte interna da página inicial

        <ScrollView style={{backgroundColor: '#FFFFFF'}}> 
          
          <Text>Aqui vai a pagina inicial</Text>
          <Image style={styles.ListaItens} source={require('../../../src/assets/img1.png')} />
          <Image style={styles.ListaItens} source={require('../../../src/assets/img2.png')} />
          <Image style={styles.ListaItens} source={require('../../../src/assets/img3.png')} />
          <Image style={styles.ListaItens} source={require('../../../src/assets/img4.png')} />
          <Image style={styles.ListaItens} source={require('../../../src/assets/img5.png')} />
          <Image style={styles.ListaItens} source={require('../../../src/assets/img6.png')} />
          <Image style={styles.ListaItens} source={require('../../../src/assets/img7.png')} />
          <Image style={styles.ListaItens} source={require('../../../src/assets/img8.png')} />
          <Image style={styles.ListaItens} source={require('../../../src/assets/img9.png')} />

        </ScrollView>
    );
}


const styles = StyleSheet.create({   

    ListaItens: {
        width: 96,
        height: 118,
    }
});

