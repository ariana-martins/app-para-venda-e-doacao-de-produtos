import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import {  launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';


export default function PerfilTopTab() {

    const [imageUser, setImageUser] = React.useState('https://i.pinimg.com/originals/7c/e6/f9/7ce6f9bdc75bc7dd98f51a1ae2b4ce19.jpg')
    
    // função vai deixar o usuário selecionar uma foto da câmera ou galeria

    const handleImageUser = () => {
        Alert.alert(
            "Selecione", 
            "Informe de onde você quer pegar a foto", 
            [ 
                {
                    text: "Galeria",
                    onPress: () => pickImageFromGalery(),
                    style: "default"
                },
                {
                    text: "Camera",
                    onPress: () => pickImageFromCamera(),
                    style: "default"
                },
                {
                    cancelable: true,
                    onDismiss: () => console.log('tratar depois...')
                }
            ]
        )
    }

    const pickImageFromGalery = async () => {
        
        console.log("chamou a galeria");
        const options: ImageLibraryOptions = {
            mediaType: 'photo'
        }

        const result = await launchImageLibrary(options);

        console.log("depois de chamar a galeria");
        console.log(result);
    }


    const pickImageFromCamera = async () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            saveToPhoto: false,
            cameraType: 'front',
            quality: 1,
        }

        const result = await launchCamera(options);
        
        if (result?.assets) {
            setImageUser(result.assets[0].uri)
            return 
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>React Native Image Picker</Text> 

            <ImageBackground style={{ width: 100, height: 100}}
                source={require('../../assets/logo.png')}
                //blurRadius={5}
            />
           
            <View style={styles.profileImage}>
                <TouchableOpacity style={styles.contentImg}
                    onPress={() => handleImageUser ()}
                >
                        
                    <Image style={styles.imgUser}
                        source={{
                            uri: imageUser
                        }}
                        resizeMode={"cover"}
                    />
                </TouchableOpacity>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    texto: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "800",
    },
    profileImage: {

    },
    contentImg: {
        width: 150,
        borderRadius: 500,
        height: 150,
        backgroundColor: "#C4C4C4",
        //border: 5, 
        //solid: #222,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    imgUser:{
        width: 145,
        height: 145,
        borderRadius: 500,
    },

});
