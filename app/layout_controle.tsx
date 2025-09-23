import React from "react";
import { StyleSheet } from "react-native";

import Background from "@/components/Background";
import { useLocalSearchParams } from "expo-router";
//import { useEffect } from "react";

import commands from "@/services/commands";

export default function (){
    const {obj} = useLocalSearchParams()
    const param = JSON.parse(Array.isArray(obj) ? obj.join(""): obj)

    const marks = param.opitional
    const device = param.default

    const command = commands()
    command.lg.connection(device.host, device.port)


   // useEffect(()=>{})



    return(
        <Background>
            
        </Background>
    )
}

const style = StyleSheet.create({   
    teste:{
        width:"100%",
        height:"100%"
    },
})