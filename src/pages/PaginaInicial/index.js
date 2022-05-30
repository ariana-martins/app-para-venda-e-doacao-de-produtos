import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, Pressable, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Pesquisar from '../Pesquisar';
import Detalhes from '../Detalhes';

import ProdutosList from '../../components/ProdutosList';



export default function PaginaInicial(){
  const navigation = useNavigation();

  const card = [
    {
    image: require('../../../src/assets/img1.png'),
    title: 'Sapatênis',
    valor: 'R$200,00',
    },
    {
    image: require('../../../src/assets/img2.png'),
    title: 'Blusa branca',
    valor: 'R$0,00',
    },
    {
    image: require('../../../src/assets/img3.png'),
    title: 'Tênis branco',
    valor: 'R$0,00',
    },
    {
    image: require('../../../src/assets/img4.png'),
    title: 'Bermuda',
    valor: 'R$0,00',
    },
    {
    image: require('../../../src/assets/img5.png'),
    title: 'Chinelo adulto',
    valor: 'R$35,00',
    },
    {
    image: require('../../../src/assets/img6.png'),
    title: 'Casaco infantil',
    valor: 'R$100,00',
    },
    {
    image: require('../../../src/assets/img7.png'),
    title: 'Sapato',
    valor: 'R$0,00',
    },
    {
    image: require('../../../src/assets/img8.png'),
    title: 'Casaco preto',
    valor: 'R$214,00',
    },
    {
    image: require('../../../src/assets/img9.png'),
    title: 'Vestido roxo',
    valor: 'R$0,00',
    },
    {
      image: require('../../../src/assets/img1.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      image: require('../../../src/assets/img2.png'),
      title: 'teste2',
      valor: 'R$0,00',
      },
      {
      image: require('../../../src/assets/img3.png'),
      title: 'testeeeeeeee',
      valor: 'R$0,0000000000',
      },
      {
      image: require('../../../src/assets/img4.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      image: require('../../../src/assets/img5.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      image: require('../../../src/assets/img6.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      image: require('../../../src/assets/img7.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      image: require('../../../src/assets/img8.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
      {
      image: require('../../../src/assets/img9.png'),
      title: 'teste1',
      valor: 'R$0,00',
      },
  
  ];
  
  const _renderItem = ({ item }) => (    
    
    <View>
      <Pressable onPress={() => navigation.navigate('Detalhes')}>
    <Image 
      source={item.image}
      style={{ width: 96, height: 118 }}
      resizeMode="cover"
    />
    </Pressable>
    <Text 
      style={{
        width: 96,
        fontFamily: "Inter", 
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: "#000000",
      }}
    >
    {item.title}
    </Text>

    <Text
    style={{
      width: 96,
      fontFamily: "Inter", 
      fontStyle: "normal",
      fontSize: 15,
      lineHeight: 20,
      color: "#000000",
    }}
    >
    {item.valor}</Text>
 
  </View>
  );


  return(
    <SafeAreaView style={styles.container}>
      <Pesquisar/>
      
       {/*Aqui vai a lista de produtos*/}
       <FlatList 
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-around', padding: 10 }}
        data={card}
        numColumns={3}
        renderItem={_renderItem}
        />
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
  }
})



/*

  return (   
    
    <SafeAreaView style={{flex: 1}}>
      <Pesquisar/>
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: "#FFFFFF"}}>
        <FlatList 
        columnWrapperStyle={{ justifyContent: 'space-around', padding: 10 }}
        data={card}
        numColumns={3}
        renderItem={_renderItem} 
        />
      </View>
    </SafeAreaView>
      );
    };


export default PaginaInicial;
*/