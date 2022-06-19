import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import {  launchCamera, launchImageLibrary } from 'react-native-image-picker';


export default function PerfilTopTab() {

    // função vai deixar o usuário selecionar uma foto da câmera


    
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Perfil está aqui
            </Text>            
        </View>
    );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "#FFFFFF",
    },
   texto: {
       fontSize: 20,
       color: "#000000",
       fontWeight: "800"
   },
   
});