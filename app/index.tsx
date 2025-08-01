import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from "react-native";

import AppButton from "@/components/AppButton"; //button personalizado com TouchableOpacity
import { LinearGradient } from 'expo-linear-gradient'; //é precisso isntalar essa módulo com o comando npx expo install expo-linear-gradient
import { Image } from "react-native";


import local_device_searchModule from "@/modules/connection/src/local_device_searchModule";

export default function index(){
   const teste = local_device_searchModule.hello();

   

    const marcas = [
        {name:"Lg", logo:require("../assets/images/marcas/lg-icon.png")}, //o rquire é usado aqui pq sourece no Image nao aceita caminhos dinâmicos
        {name:"Samsung",logo:require("../assets/images/marcas/sansung-icon.png")},
        {name:"Philips", logo:require("../assets/images/marcas/philips-icon.png")},                    
        {name:"Multlaser", logo:require("../assets/images/marcas/multilaser-icon.png")}
    ];

    //func que constroi 
    let render = ({item})=>( 
        <View style={style.marcas}>
            {/*<Button title={item.name}/> nao usado por problemas ao estilizar !*/ }
            <AppButton title={item.name} teste="sapo"></AppButton>
            <Image style={style.logos} source={item.logo}/> {/*o sourece nao aceita caminhos dinâmicos*/}
        </View>
    );
    return (
        <LinearGradient 
            // Cores do gradiente
            colors={["rgb(43, 43, 43)", "rgb(22, 22, 22)"]}
            // Direção do gradiente
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            // Estilo da área com gradiente
            style={style.teste} 
        >
            <View>
                <View style={style.header}>
                    <Text style={style.titulo}>Qual marca ?</Text>
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
    marcas:{
        flexDirection: 'row', //um do lado do outro
        alignItems:"center", 
        justifyContent:"space-between", //espaço entre os itens

        padding:15,
        borderTopColor:"rgba(48, 48, 48, 1)", 
        borderTopWidth: 3,
    },

    teste:{
        width:"100%",
        height:"100%"
        
    },

    header:{
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center", 

        paddingBottom:40,
        paddingTop:20, 

    },

    titulo:{
        fontSize:30,
        textAlign:"center",
        color:"white",
        marginRight: 10,
 
    },

    tv:{
        //resizeMode:"stretch", //para esticar a imagem, mas fica feio
        flexDirection: 'row',
        resizeMode:"contain",

        width:50,
        height:50,
    },

    logos:{
        resizeMode:"contain",
        width:70,
        height:50,
        marginRight:10,
    }
})

/*  

 OBS SOBRE STYLE EM REACT NATIVE:
 flexDirection: 'row': O display flex é o padrao do react native, 
 e nao existe display inline ou block portanto para deixar
 as coisas um do lado do outro oflexDirection: 'row' é obrigatorio

*/