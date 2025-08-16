import { NetworkInfo } from 'react-native-network-info'; // Importa o módulo para obter informações de rede

export default async function getLocalIp() {
    try{
        const HostIp = await NetworkInfo.getIPV4Address(); // Obtém o IP local do dispositivo


        const ipPrefix = HostIp.split('.').slice(0, 3).join('.');
        /* 

            1. split('.') → transforma a string do IP em um array, separando pelos pontos 
                Ex: "192.168.0.25" → ["192", "168", "0", "25"]

            2. slice(0, 3) → retorna os três primeiros elementos do array (os três primeiros octetos)
                Ex: ["192", "168", "0", "25"] → ["192", "168", "0"]

            3. join('.') → junta os elementos do array de volta em uma string, separando por pontos
                Ex: ["192", "168", "0"] → "192.168.0"

            Resultado final: ipPrefix contém o prefixo da rede
        */

            
        return ipPrefix; 
    }
    catch(erro){
        throw new Error("Erro ao obter o IP local: " + erro.menssage); // Lança um erro se não for possível obter o IP
    } 
}