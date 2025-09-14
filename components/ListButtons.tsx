import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

export default function ListButtons({array, dest, children }){ //title é uma props
    
    const style = StyleSheet.create({
    bodyButton:{
        flexDirection: 'row', //um do lado do outro
        justifyContent:"space-between", //espaço entre os itens

        padding:17,
        backgroundColor:"rgba(199, 199, 199, 1)",
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
        return (
            <View style={style.bodyButton}>
                <TouchableOpacity style={style["btn"]} onPress={() => { router.push({ pathname: dest, params: { marca: item.name, service: item.service } }) }}>
                    {children(item)}
                </TouchableOpacity>
            </View>
        );
    }

    const objectComponents = {
        withImage:(
            <FlatList
                data={array}
                renderItem={render}
            />
        ),
    }
    return objectComponents.withImage
}
