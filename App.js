
/*import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './src/pages/Login/index';


//Login está correto aqui <<<<=====
export default function Projeto1(){
  return (
    <View style={estilos.conteiner}>
      <Login/>
    </View>
  );
};


//conteúdo de CSS
const estilos = StyleSheet.create({
  conteiner:{
    flex: 1,
    backgroundColor: '#46C227', //cor da tela
 //   alignItems: 'center', //centralizando todos os textos e imagens dentro do estilo conteiner
 //   justifyContent: 'center', //justifica todos os textos ao centro da tela
  },
});
//Login está correto até aqui <<<<=====
*/


/*
import React from 'react';
import { View, Text} from 'react-native';
import PaginaInicial from './src/pages/PaginaInicial';

export default function Projeto1(){
  return (
    <View>
      <View>
       <PaginaInicial/>
      </View>
    </View>
  );
};
*/

//import 'react-native-gesture-handler'; // Torna as interações de toque e o rastreamento de gestos suaves...
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //navegação inferior da tab
import { createStackNavigator } from 'react-navigation-stack'; //ir e voltar para outra página, na parte superior
import { TouchableOpacity } from 'react-native-gesture-handler'; //utilizado para incluir o ícone como botão
import Icon from 'react-native-vector-icons/Ionicons';
import PaginaInicial from './src/pages/PaginaInicial';
import Pesquisar from './src/pages/Pesquisar';

function PaginaInicialScreen() {
	return (
    <View style={styles.container}>
	    <View>
          <PaginaInicial/>
      </View>    
    </View>
    );
}

function PesquisarScreen() {
	return (
		<View style={styles.container}>
			<Text>Pesquisar</Text>
      <Pesquisar/>
		</View>
	);
}
 
function AdicionarNovoProdutoScreen() {
	return (
		<View style={styles.container}>
			<Text>AdicionarNovoProduto</Text>
		</View>
	);
}

function ChatScreen() {
	return (
		<View style={styles.container}>
			<Text>Chat</Text>
		</View>
	);
}

function PerfilScreen() {
	return (
		<View style={styles.container}>
    	<Text>Perfil</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator(); //Cria a navegação da Tab

export default function Projeto1() {
	return (
		<NavigationContainer>
      <Tab.Navigator>
				<Tab.Screen 
          name="Pagina Inicial, aqui vai filtrar por categoria" 
          component={PaginaInicialScreen} 
          options={{
            title: 'Filtrar por categoria',
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 25 }}>
                  <Icon 
                    name="funnel-outline" 
                    size={20} 
                    color="#000000" 
                  />
              </TouchableOpacity>
              
            ),
            tabBarIcon: ({ color }) => (
              <Icon name="home-outline" size={20} color="#000000" />
            ),
          }}
        />
				<Tab.Screen 
          name="Pesquisar" 
          component={PesquisarScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="search-outline" size={20} color="#000000" />
            ),
          }}
        />
				<Tab.Screen 
          name="Adicionar Novo Produto" 
          component={AdicionarNovoProdutoScreen} 
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name="add-outline" size={30} color="#000000" />
            )
          }}  
        />
				<Tab.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name="chatbubble-outline" size={20} color="#000000" />
            )
          }}
        />
				<Tab.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name="person-outline" size={20} color="#000000" />            
            )
          }}
        />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

//estilo de todas as páginas (fora a Tab e TabScreen)
const styles = StyleSheet.create({
	container: {
//		flex: 1,
//		justifyContent: 'center',
//		alignItems: 'center',
	},
});
