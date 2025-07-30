import React from "react";
import { StyleSheet } from "react-native";

import { LinearGradient } from 'expo-linear-gradient'; //é precisso isntalar essa módulo com o comando npx expo install expo-linear-gradient

export default function (){
    return(
        <LinearGradient 
            // Cores do gradiente
            colors={["rgb(27, 27, 27)", "rgb(31, 31, 31)"]}
            // Direção do gradiente
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            // Estilo da área com gradiente
            style={style.teste} 
        >
        </LinearGradient>
    )
}

const style = StyleSheet.create({   
    teste:{
        width:"100%",
        height:"100%"
    },
})