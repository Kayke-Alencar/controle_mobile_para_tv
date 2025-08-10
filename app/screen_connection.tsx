import React from "react";
import {
    Text,
    View
} from "react-native";

import { useEffect, useState } from "react";
import getLocalIp from "../services/getLocalIp"; // Importa a função para obter o IP local


export default function screen_connection() { 
    const [localIp, setLocalIp] = useState("");

    useEffect(() => {
        async function fetchLocalIp() {
            const ip = await getLocalIp(); // o await so pode ser usado dentro de uma função async
            setLocalIp(ip); 
        }; fetchLocalIp();
    }, []); // Chama a função para obter o IP local quando o componente é montado

    return (
        <View>
            <Text>IP Local: {localIp}</Text>
        </View>
    );
}