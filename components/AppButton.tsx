import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AppButton({title, teste}){ //title é uma props
    return(
        <View style={style.bodyButton}>
            <TouchableOpacity onPress={()=>{router.push("/layout_controle")}}>
                <Text style={style.txt}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    bodyButton:{
        marginLeft:10,
    },
    txt:{
        color:"gray",
        fontSize:20 ,
    }

})  