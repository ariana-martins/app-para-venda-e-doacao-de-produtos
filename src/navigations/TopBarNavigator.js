import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function Perfil() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#03cafc",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: "#FFFFFF",
                    fontWeight: "800",
                }}
            >
                Perfil está aqui
            </Text>
        </View>
    );
}

function Interesses() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#c203fc",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: "#FFFFFF",
                    fontWeight: "800"
                }}
            >
                Interesses está aqui
            </Text>
        </View>
    );
}

function MeusProdutos() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#48d969",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: "#FFFFFF",
                    fontWeight: "800"
                }}
            >
                Meus produtos está aqui
            </Text>
        </View>
    );
}


const Tab = createMaterialTopTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName='Perfil'
            tabBarOptions={{
                activeTintColor: "#e91e63",
                labelStyle: { fontSize: 12},
                style: { backgroundColor: '#FFFFFF'}
            }}
        >
            <Tab.Screen
                name='MeusProdutos'
                component={MeusProdutos}
                options={{ tabBarLabel: 'Meus Produtos'}}
            />
            <Tab.Screen
                name='Interesses'
                component={Interesses}
                options={{ tabBarLabel: 'Interesses'}}
            />
            <Tab.Screen
                name='Perfil'
                component={Perfil}
                options={{ tabBarLabel: 'Perfil'}}
            />       
        </Tab.Navigator>
    );
}


export default function TopBarNavigator() {
    return(
        <MyTabs/>
    );
}