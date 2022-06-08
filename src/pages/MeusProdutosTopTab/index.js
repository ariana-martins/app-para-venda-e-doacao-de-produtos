import React from 'react';
import { View, Text } from 'react-native';

export default function MeusProdutos() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: "#000000",
                    fontWeight: "800"
                }}
            >
                Meus produtos está aqui
            </Text>
        </View>
    );
}