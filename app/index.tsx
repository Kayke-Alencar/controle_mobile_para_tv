import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from "react-native";

import ListButtons from "@/components/ListButtons"; //button personalizado com TouchableOpacity
import { LinearGradient } from 'expo-linear-gradient'; //é precisso isntalar essa módulo com o comando npx expo install expo-linear-gradient
import { Image } from "react-native";

export default function index(){
    const marcas = [
        {name:"Lg", logo:require("../assets/images/marcas/lg-icon.png"), service:"airplay"}, //o rquire é usado aqui pq sourece no Image nao aceita caminhos dinâmicos
        {name:"Samsung",logo:require("../assets/images/marcas/sansung-icon.png"), service:"airplay"},
        {name:"Philips", logo:require("../assets/images/marcas/philips-icon.png"), service:"googlecast"},                    
        {name:"Multlaser", logo:require("../assets/images/marcas/multilaser-icon.png"), service:"googlecast" },
        {name:"Chromecast", logo:require("../assets/images/marcas/google.png"), service:"googlecast"},

    ];

    //func que constroi 
    let render = ({item: iten})=>( 
        <ListButtons title={iten.name} dest={"/screen_connection"} imageRequiere={iten.logo} service={iten.service}/>
    );
    return (
        <LinearGradient 
            // Cores do gradiente
            colors={["rgba(0, 4, 41, 1)", "rgba(0, 1, 17, 1)"]}
            // Direção do gradiente
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            // Estilo da área com gradiente
            style={style.teste} 
        >
            <View>
                <View style={style.header}>
                    <Text style={style.titulo}>Escolha a marca</Text>
                    <Image style={style.tv} source={require("../assets/images/tv.png")}/>
                </View>

                {/*FlatList: é como se fosse usado um loop para montar estruturas repetitivas.*/}
                <FlatList
                    data={marcas} //array que vai ser usado para "rederizar" os dados
                    renderItem={render} //func que constroi 
                />
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    teste:{
        width:"100%",
        height:"100%" 
    },

    header:{
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center", 

        paddingBottom:30,
        paddingTop:20, 

    },

    titulo:{
        fontSize:40,
        textAlign:"center",
        color:"white",
        marginRight: 10,
 
    },

    tv:{
        //resizeMode:"stretch", //para esticar a imagem, mas fica feio
        flexDirection: 'row',
        resizeMode:"contain",

        width:60,
        height:60,
    },
})

/*  

 OBS SOBRE STYLE EM REACT NATIVE:
 flexDirection: 'row': O display flex é o padrao do react native, 
 e nao existe display inline ou block portanto para deixar
 as coisas um do lado do outro oflexDirection: 'row' é obrigatorio

*/