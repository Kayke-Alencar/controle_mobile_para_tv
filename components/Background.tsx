import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { StyleSheet } from "react-native"

export default function Background(props) {
    return (
        <LinearGradient
            // Cores do gradiente
            colors={["rgba(23, 43, 73, 1)", "rgba(13, 25, 43, 1)"]}
            // Direção do gradiente
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            // Estilo da área com gradiente
            style={style.teste}
        >
       
                 {props.children} {/*conteudo que vai dentro*/}
           

        </LinearGradient>
    )
}

const style = StyleSheet.create({
    teste:{
        width:"100%",
        height:"100%",

        alignItems:"center",
        
    },
})