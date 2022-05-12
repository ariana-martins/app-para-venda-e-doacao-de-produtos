import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import { Card, Title } from 'react-native-paper';

export default function PaginaInicial(){
    return(
        
        //cor na parte interna da página inicial
        <ScrollView > 
          <View>
            <Card style={{padding:20, margin:10, backgroundColor: "#eddfdf"}}>
                <Card.Cover source={require('../../../src/assets/img1.png')} />
                <Title>Sapato novo</Title>
                <Text>R$120,00</Text>
                <Card.Cover source={require('../../../src/assets/img2.png')} />
                <Title>Título produto aqui</Title>
                <Text>R$0,00</Text>
                <Card.Cover source={require('../../../src/assets/img3.png')} />
                <Title>Título produto aqui</Title>
                <Text>R$0,00</Text>
                <Card.Cover source={require('../../../src/assets/img4.png')} />
                <Title>Título produto aqui</Title>
                <Text>R$0,00</Text>
                <Card.Cover source={require('../../../src/assets/img5.png')} />
                <Title>Título produto aqui</Title>
                <Text>R$0,00</Text>
                <Card.Cover source={require('../../../src/assets/img6.png')} />
                <Title>Título produto aqui</Title>
                <Text>R$0,00</Text>
                <Card.Cover source={require('../../../src/assets/img7.png')} />
                <Title>Título produto aqui</Title>
                <Text>R$0,00</Text>
                <Card.Cover source={require('../../../src/assets/img8.png')} />
                <Title>Título produto aqui</Title>
                <Text>R$0,00</Text>
                <Card.Cover source={require('../../../src/assets/img9.png')} />
                <Title>Título produto aqui</Title>
                <Text>R$0,00</Text>
            </Card>
          </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({   
    
});

