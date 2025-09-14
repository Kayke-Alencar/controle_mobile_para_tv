import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { StyleSheet, View } from "react-native"

export default function Background(props) {
    return (
        <LinearGradient
            // Cores do gradiente
            colors={["rgba(0, 6, 58, 1)", "rgba(0, 1, 17, 1)"]}
            // Direção do gradiente
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            // Estilo da área com gradiente
            style={style.teste}
        >
            <View>
                {props.children} {/*conteudo que vai dentro*/}
            </View>
            


        </LinearGradient>
    )
}

const style = StyleSheet.create({
    teste:{

        width:"100%",
        height:"100%" 
    },
})