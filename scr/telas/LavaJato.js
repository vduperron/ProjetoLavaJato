
import React from "react";
import { StatusBar,View, SafeAreaView ,Button, Text, KeyboardAvoidingView, StyleSheet, Image} from "react-native";
import MyButton from "../components/Button";

import Cesta from '../components/Cesta';

/*
export default function Pagina1({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <Image style={styles.image} 
                    source={require('../../assets/washapp1.png')}/>
                    <Cesta />  
            </View>
                           
           
        </KeyboardAvoidingView>
  )
}
*/


export default function Pagina1({navigation}) {
return (
    <SafeAreaView >
        <StatusBar/>
        <Cesta />    
    </SafeAreaView>
);
} 


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        height: 180,
        width: 200,
        margin: 25,
    },
    b: {
        padding: 20,
    },
    texto1: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})
