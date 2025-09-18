import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

export default function ListButtons({array, dest,param=undefined,children}){ //tbm poderia ussar apenas (props) assim fica mais 
    
    const style = StyleSheet.create({
    bodyButton:{
        flexDirection: 'row', //um do lado do outro
        justifyContent:"space-between", //espaço entre os itens

        padding:20,
        backgroundColor:"rgba(202, 202, 202, 1)",
        borderRadius:30,
        width:"90%",
        margin:"auto",
        
        marginBottom:10,
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
