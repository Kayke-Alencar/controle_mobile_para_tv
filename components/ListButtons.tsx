import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ListButtons({title, link, image, imageRequiere}){ //title é uma props
    const objectComponents = {
        withImage:(
            <View style={style.bodyButton}>
                <TouchableOpacity style={style.btn} onPress={()=>{router.push(link)}}>
                    <Text style={style.txt}>{title}</Text>
                    <Image style={style.logos} source={imageRequiere}/> {/*o sourece nao aceita caminhos dinâmicos*/}
                </TouchableOpacity>
            </View>
        ),

        notImage:(
            <View style={style.bodyButton}>
                <TouchableOpacity style={style.btn} onPress={()=>{router.push(link)}}>
                    <Text style={style.txt}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return objectComponents[image]; //retorna o componente de acordo com a props image
}

const style = StyleSheet.create({
    bodyButton:{
        flexDirection: 'row', //um do lado do outro
        alignItems:"center", 
        justifyContent:"space-between", //espaço entre os itens

        padding:15,
        borderTopColor:"rgba(48, 48, 48, 1)", 
        borderTopWidth: 3,


        marginLeft:10,
    },

    btn:{
        flexDirection: 'row',
        justifyContent:"space-between",

        width: "100%",
        height:"100%",
    },

    logos:{
        resizeMode:"contain",
        width:70,
        height:50,
        marginRight:10,
    },

    txt:{
        color:"gray",
        fontSize:27,
    }
})  