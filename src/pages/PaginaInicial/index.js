import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, Pressable, Alert} from 'react-native';
import Pesquisar from '../Pesquisar';
import Detalhes from '../Detalhes';

import ProdutosList from '../../components/ProdutosList';



export default function PaginaInicial(){
  const [produtos, setProdutos] = useState([
    { key: 1, produtos: 'roupa 1'},
    { key: 2, produtos: 'roupa 2'},
    { key: 3, produtos: 'roupa 3'},
    { key: 4, produtos: 'roupa 4'},
    { key: 5, produtos: 'roupa 5'},
    { key: 6, produtos: 'roupa 6'},
    { key: 7, produtos: 'roupa 7'},
    { key: 8, produtos: 'roupa 8'},
    { key: 9, produtos: 'roupa 9'},
    { key: 10, produtos: 'roupa 10'},
    { key: 11, produtos: 'roupa 11'},
    { key: 12, produtos: 'roupa 12'},
    { key: 13, produtos: 'roupa 13'},
    { key: 14, produtos: 'roupa 14'},
    { key: 15, produtos: 'roupa 15'},
    { key: 16, produtos: 'roupa 16'},
    { key: 17, produtos: 'roupa 17'},
    { key: 18, produtos: 'roupa 18'},
  ])


  return(
    <SafeAreaView style={styles.container}>
      <Pesquisar/>
      
       {/*Aqui vai a lista de produtos*/}
       <FlatList 
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-around', padding: 10 }}
        data={produtos}
        keyExtractor={ (item) => String(item.key) }
        renderItem={ ({item}) => <ProdutosList data={item} /> } 
        numColumns={3}
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
  



const PaginaInicial = ( ) => {
  const _renderItem = ({ item }) => (    
    
    <View>
      <Pressable onPress={() => Alert.alert('Detalhes')}>
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

    <Pressable onPress={() => Alert.alert('Você clicou no valor')}>
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
    </Pressable>
  </View>
  );
 

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