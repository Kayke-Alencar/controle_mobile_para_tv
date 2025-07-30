import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from "react-native";

import AppButton from "@/components/AppButton"; //button personalizado com TouchableOpacity
import local_device_searchModule from "@/modules/connection/src/local_device_searchModule";
import { LinearGradient } from 'expo-linear-gradient'; //é precisso isntalar essa módulo com o comando npx expo install expo-linear-gradient



export default function index(){
    const teste = local_device_searchModule.hello();
    const marcas = [
        {name:teste,},
        {name:"Lg",},
        {name:"Sansung"},
        {name:"Philips"},                    
        {name:"Multlaser"}
    ];

    //func que constroi 
    let render = ({item})=>( 
        <View style={style.marcas}>
            {/*<Button title={item.name}/> nao usado por problemas ao estilizar !*/ }
            <AppButton title={item.name} teste="sapo"></AppButton>
        </View>
    );
    return (
        <LinearGradient 
            // Cores do gradiente
            colors={["rgb(27, 27, 27)", "rgb(31, 31, 31)"]}
            // Direção do gradiente
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            // Estilo da área com gradiente
            style={style.teste} 
        >
            <View>
                <View>
                    <Text style={style.titulo}>Escolha sua TV</Text>
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
        padding:15,
        borderTopColor:"rgb(35,35,35)", 
        borderTopWidth: 3,
    },

    teste:{
        width:"100%",
        height:"100%"
    },

    titulo:{
        fontSize:20,
        textAlign:"center",
        color:"white",
        paddingBottom:30,
        paddingTop:20,  
    }
})

/*  

 OBS SOBRE STYLE EM REACT NATIVE:
 flexDirection: 'row': O display flex é o padrao do react native, 
 e nao existe display inline ou block portanto para deixar
 as coisas um do lado do outro oflexDirection: 'row' é obrigatorio

*/