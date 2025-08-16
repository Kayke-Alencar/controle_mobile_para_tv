import React from "react";
import {
    FlatList,
    Text,
    View,
} from "react-native";

import local_device_searchModule from "@/modules/connection/src/local_device_searchModule";
import { useEffect, useState } from "react";
import getLocalIp from "../services/getLocalIp"; // Importa a função para obter o IP local


export default function screen_connection() { 
    const [localIp, setLocalIp] = useState("");
    const [teste, setTeste] = useState([]);

    useEffect(() => {
        async function fetchLocalIp() {
           const ip = await getLocalIp(); // o await so pode ser usado dentro de uma função async
            setLocalIp(ip); 

        };fetchLocalIp();
    }, []); // Chama a função para obter o IP local quando a tela e iniciada

    useEffect(() => { 
        const devices = async() => {
            try {
                const result = await local_device_searchModule.searchDevices(localIp); // Chama o método do módulo nativo
                setTeste(result); // Atualiza o estado com os dispositivos encontrados
            } catch (error) {
                console.error("Erro ao buscar dispositivos:", error);
            }
        }
        

        /*
        const array =             
            [
                {"ip": "192.168.0.1", "hostname": "router"},
                {"ip": "192.168.0.5", "hostname": "PC-Kayke"},
                {"ip": "192.168.0.10", "hostname": "SmartTV"}
            ]
        */
       
       
    }, [localIp]); // Chama a função quando o IP local for atualizado

    function render({item}) {
        return (
            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
                <Text>IP: {item.ip}</Text>
                <Text>Hostname: {item.hostname}</Text>
            </View>
        );
    }

    return (
        <View>
            <Text style={{ fontSize: 20, margin: 10 }}>Dispositivos na rede {localIp}:</Text>
            <FlatList 
                data={teste} // Array de dispositivos encontrados
                renderItem={render} // Função que renderiza cada item
                keyExtractor={(item) => item.ip} // Chave única para cada item
            />
            
        </View>
    );
}