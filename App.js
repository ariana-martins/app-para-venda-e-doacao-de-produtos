
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

//===================================================================
//TAB SCREEN FUNCIONANDO NESSA PARTE DEBAIXO

//import 'react-native-gesture-handler'; // Torna as interações de toque e o rastreamento de gestos suaves...
/*
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //navegação inferior da tab
import { createStackNavigator } from 'react-navigation-stack'; //ir e voltar para outra página, na parte superior
import { TouchableOpacity } from 'react-native-gesture-handler'; //utilizado para incluir o ícone como botão
import Icon from 'react-native-vector-icons/Ionicons';
import PaginaInicial from './src/pages/PaginaInicial';
import Pesquisar from './src/pages/Pesquisar';
import AdicionarNovoProduto from './src/pages/AdicionarNovoProduto';



function PaginaInicialScreen() {
	return (
    <View style={styles.container}>
	    <View>
        <Pesquisar/>
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
      <AdicionarNovoProduto/>
		</View>
	);
}

function ChatScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
            headerStyle:{
              backgroundColor: '#009387'
            },
            headerTintColor: '#00000',
            headerTitleStyle: {
              fontWeight: 'normal'
            },
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
            tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={20} color="#000000" />
            ),
            tabBarLabel: "Pagina Inicial",
          }}
        />
				<Tab.Screen 
          name="Pesquisar!" 
          component={PesquisarScreen} 
          options={{            
            tabBarIcon: ({ color }) => (
              <Icon name="search-outline" size={20} color="#000000" />
            ),
            tabBarLabel: "Pesquisar",
          }}
        />
				<Tab.Screen 
          name="Adicionar Novo Produto!" 
          component={AdicionarNovoProdutoScreen} 
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name="add-outline" size={30} color="#000000" />
            ),
            tabBarLabel: "Adicionar novo produto",
          }}
        />
				<Tab.Screen 
          name="Chat!" 
          component={ChatScreen} 
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name="chatbubble-outline" size={20} color="#000000" />
            ),
            tabBarLabel: "Chat",
          }}
        />
				<Tab.Screen
          name="Perfil!" 
          component={PerfilScreen} 
          options={{
            tabBarIcon: ({ color }) => (
            <Icon name="person-outline" size={20} color="#000000" />            
            ),
            tabBarLabel: "Perfil",
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
*/

//=================================================
// AQUI PARA BAIXO, É A PARTE NOVA DO CÓDIGO
//===================================================

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import PaginaInicial from './src/pages/PaginaInicial';
import Pesquisar from './src/pages/Pesquisar';
import AdicionarNovoProduto from './src/pages/AdicionarNovoProduto';
import Chat from './src/pages/Chat';
import Perfil from './src/pages/Perfil';
import Detalhes from './src/pages/Detalhes';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen 
      name='Página Inicial' 
      component={PaginaInicial} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home-outline" size={20} color="#000000" />
          ),
          tabBarLabel: "Pagina Inicial",
        
      }}
      />
      <Tab.Screen 
      name='Pesquisar - Tab' 
      component={Pesquisar} 
      options={{            
        tabBarIcon: ({ color }) => (
          <Icon name="search-outline" size={20} color="#000000" />
        ),
        tabBarLabel: "Pesquisar",
      }}
      />
      <Tab.Screen 
      name='Adicionar Novo Produto - Tab' 
      component={AdicionarNovoProduto} 
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name="add-outline" size={30} color="#000000" />
        ),
        tabBarLabel: "Adicionar novo produto",
      }}
      />
      <Tab.Screen 
      name='Chat - Tab' 
      component={Chat} 
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name="chatbubble-outline" size={20} color="#000000" />
        ),
        tabBarLabel: "Chat",
      }}
      />
      <Tab.Screen 
      name='Perfil - Tab' 
      component={Perfil} 
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name="person-outline" size={20} color="#000000" />            
        ),
        tabBarLabel: "Perfil",
      }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Inicio!" component={Tabs} options={{headerShown: false}} />
        
        <Stack.Screen 
        name="Detalhes" 
        component={Detalhes} 
        options={{
          title: 'Detalhes',
          headerTitleStyle:{
            fontFamily: 'Roboto',
            fontSize: 25,
            color: '#000000',
          },

        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




