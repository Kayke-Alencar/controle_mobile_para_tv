import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ListButtons({title, link, image, imageRequiere}){ //title é uma props
    const objectComponents = {
        withImage:(
            <View style={style.bodyButton}>
                <TouchableOpacity style={style.btn} onPress={()=>{router.push({pathname:link, params:{marca:title}})}}>
                    <Text style={style.txt}>{title}</Text>
                    <Image style={style.logos} source={imageRequiere}/> {/*o source nao aceita caminhos dinâmicos*/}
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
        backgroundColor:"rgba(48, 48, 48, 1)",
        borderRadius:10,
        width:"95%",
        margin:"auto",
        marginBottom:5,

      
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