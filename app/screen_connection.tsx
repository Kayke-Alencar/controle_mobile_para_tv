import React from "react";
import {
    Text,
    View
} from "react-native";

import local_device_searchModule from "@/modules/connection/src/local_device_searchModule";
import { useEffect, useState } from "react";
import getLocalIp from "../services/getLocalIp"; // Importa a função para obter o IP local


export default function screen_connection() { 
    const [localIp, setLocalIp] = useState("");
    const [teste, setTeste] = useState("......");

    useEffect(() => {
        async function fetchLocalIp() {
            const ip = await getLocalIp(); // o await so pode ser usado dentro de uma função async
            setLocalIp(ip); 

        };fetchLocalIp();
    }, []); // Chama a função para obter o IP local quando a tela e iniciada

    useEffect(() => { 
        setTeste(local_device_searchModule.GetDevices(localIp));
    }, [localIp]); // Chama a função quando o IP local for atualizado

    return (
        <View>
            <Text>IP Local: {teste}</Text>
        </View>
    );
}