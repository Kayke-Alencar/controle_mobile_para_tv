import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

export default function ListButtons({array, dest,param=undefined,color="white",children}){ //tbm poderia ussar apenas (props) assim fica mais 
    
    const style = StyleSheet.create({
    bodyButton:{
        flexDirection: 'row', //um do lado do outro
        justifyContent:"space-between", //espaço entre os itens

        width:"93%",
        margin:"auto",

        padding:20,
        marginBottom:12,

        backgroundColor:color,
        boxShadow:"-1px 7px 9px -1px rgba(0, 0, 0, 1)",
        borderRadius:30,

        

    },

    btn:{
        flexDirection: 'row',
        justifyContent:"space-between",
        margin:"auto",
        
        width: "95%",
        height:"100%",
    },
})  


    const render = ({ item }) => {

        
        const obj = JSON.stringify( //serializa obj, (transformar o objeto em uma string JSON)
            {
                default:item,
                opitional:param
            }
        )

        return (
            <View style={style.bodyButton}>
                <TouchableOpacity style={style["btn"]} onPress={() =>{ router.push({ pathname: dest, params:{obj}}) }}>
                    {children(item)}
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <FlatList
            data={array}
            renderItem={render}
            />
    );
}
