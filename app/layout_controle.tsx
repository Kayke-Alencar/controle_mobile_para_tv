import React from "react";
import { StyleSheet, Text } from "react-native";

import Background from "@/components/Background";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import commands from "@/services/commands";

export default function (){
    const {obj} = useLocalSearchParams();

    //param: verifica se é um array de string ou uma string, Se for array faz o join() e transofoema em string se nao apenas a retorna, 
    // logo em seguida a str "jSON" e transformada em obj js 
    const param = JSON.parse(Array.isArray(obj) ? obj.join(""): obj);

    const mark = param.opitional;
    const device = param.default;

    const command = commands();
    
    const [message, setMessage] = useState("Nada Ainda")

   useEffect(()=>{
    const connect = command[mark.name].connection(device.host, device.port);

    connect.onerror = (error)=>{
        console.log(error)
        setMessage(JSON.stringify(error))
    } 

    if(mark.name === "chromecast" ){
        setTimeout(()=>{
            console.log("teste");
        },1000)
    } 
   },[])



    return(
        <Background>
            <Text style={{color:"white", fontSize:15}}>{message}</Text>
            
        </Background>
    )
}

const style = StyleSheet.create({   
    teste:{
        width:"100%",
        height:"100%"
    },
})