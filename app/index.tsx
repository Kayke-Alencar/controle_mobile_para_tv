import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";

import Background from "@/components/Background"; //funco com linear gradient
import ListButtons from "@/components/ListButtons"; //button personalizado com TouchableOpacity

/* Todo componente comeca com letra Maiuscula !*/

export default function index(){
    const marcas = [
        {name:"lg", logo:require("../assets/images/marcas/lg-icon.png"), service:"airplay"}, //o rquire é usado aqui pq sourece no Image nao aceita caminhos dinâmicos
        {name:"samsung",logo:require("../assets/images/marcas/sansung-icon.png"), service:"airplay"},
        {name:"philips", logo:require("../assets/images/marcas/philips-icon.png"), service:"googlecast"},                    
        {name:"multlaser", logo:require("../assets/images/marcas/multilaser-icon.png"), service:"googlecast" },
        {name:"chromecast", logo:require("../assets/images/marcas/google.png"), service:"googlecast"},

    ];

    return (
        <Background>
            <View style={style.body}>
                <View style={style.header}>
                    <Text style={style.titulo}>Qual marca ?</Text>
                    <Image style={style.tv} source={require("../assets/images/tv2.png")} />
                </View>

                <ListButtons array={marcas} dest={"/devices"} color="rgba(0, 45, 90, 1)">
                    {(item) => (
                        <>
                            <Text style={style.txt}>{item.name[0].toUpperCase()+item.name.slice(1, item.name.length)}</Text>
                            <Image style={style.logos} source={item.logo} />
                        </>
                    )}
                </ListButtons>

            </View>
        </Background>
    );
}

const style = StyleSheet.create({
    body:{
        width:"100%",
        //margin:"auto",
    },
    txt:{
        color:"rgba(226, 226, 226, 1)",
        fontSize:30,
    },

    logos:{
        resizeMode:"contain",
        width:80,
        height:40,
        
    },


    teste:{
        width:"100%",
        height:"100%" 
    },

    header:{
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center", 

        marginBottom:30,
        paddingTop:20, 

    },

    titulo:{
        fontSize:35,
        textAlign:"center",
        color:"rgba(255, 255, 255, 1)",
        //marginRight: 10,

        fontFamily:"system-ui",
        fontWeight:"bold",
 
    },

    tv:{
        //resizeMode:"stretch", //para esticar a imagem, mas fica feio
        flexDirection: 'row',
        resizeMode:"contain",
        marginLeft:5,

        width:50,
        height:30,
    },
})

/*  

 OBS SOBRE STYLE EM REACT NATIVE:
 flexDirection: 'row': O display flex é o padrao do react native, 
 e nao existe display inline ou block portanto para deixar
 as coisas um do lado do outro oflexDirection: 'row' é obrigatorio

*/