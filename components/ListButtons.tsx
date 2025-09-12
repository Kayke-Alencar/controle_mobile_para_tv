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
    }

    return objectComponents[image]; //retorna o componente de acordo com a props image
}

const style = StyleSheet.create({
    bodyButton:{
        flexDirection: 'row', //um do lado do outro
        justifyContent:"space-between", //espaço entre os itens

        padding:17,
        backgroundColor:"rgba(0, 11, 71, 1)",
        borderRadius:30,
        width:"90%",
        margin:"auto",
        marginBottom:10,

      
    },

    btn:{
        flexDirection: 'row',
        justifyContent:"space-between",
        margin:"auto",
        
        width: "95%",
        height:"100%",
    },

    logos:{
        resizeMode:"contain",
        width:75,
        height:50,
        marginRight:10,
    },

    txt:{
        color:"white",
        fontSize:30,
    }
})  