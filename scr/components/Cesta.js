import React from 'react';
import { StyleSheet, Image, Dimensions, Text, Button } from 'react-native';
import { View } from 'react-native-web';

import topo from '../../assets/stetcar.png'
import simples from '../../assets/simples.png'
import polimento from '../../assets/polimento.png'
import completa from '../../assets/completa.png'


const width = Dimensions.get('screen').width

export default function Cesta() {
    return <>
    <Image source={topo} style = {estilos.topo} />
    

    <View style = {estilos.cesta}>
        <Text style={estilos.nome}>StetCar </Text>
        <View style = {estilos.servico}>
            <Image source= {simples} style = {estilos.imagemServico} />
            <Text style = {estilos.nomeServico}>Limpeza Simples </Text>
        </View>        
        <Text style = {estilos.descricao} >Limpeza do carro utilizando Shampoo automotivo da 3m, e pano de microfibra para enxague. </Text>
        <Text style = {estilos.preco} >R$25,00 </Text>
        <Button title = "Selecionar"/>

        <View style = {estilos.servico}>
            <Image source= {polimento} style = {estilos.imagemServico} />
            <Text style = {estilos.nomeServico}>Limpeza com Polimento </Text>
        </View>        
        <Text style = {estilos.descricao} >Limpeza do carro utilizando Shampoo automotivo da 3m, pano de microfibra para enxague, e polido com cera grand prix</Text>
        <Text style = {estilos.preco} >R$35,00 </Text>
        <Button title = "Selecionar"/>

        <View style = {estilos.servico}>
            <Image source= {completa} style = {estilos.imagemServico} />
            <Text style = {estilos.nomeServico}>Limpeza completa </Text>
        </View>        
        <Text style = {estilos.descricao} >Limpeza do carro utilizando Shampoo automotivo da 3m, pano de microfibra para enxague,  polido com cera grand prix, limpeza do motor e aplicado oleo de macaúba no motor</Text>
        <Text style = {estilos.preco} >R$60,00 </Text>
        <Button title = "Selecionar"/>

    </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 0.08* width,
        fontFamily: "MontserratBold"
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 20,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    servico: {
        flexDirection: "row",
        paddingVertical: 12
    },    
    imagemServico: {
        width: 60,
        height: 60
    },
    nomeServico:{
        fontSize:22,
        lineHeight:26,
        marginLeft: 12
    },
    descricao:{
        color:"#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop:8
    }

});