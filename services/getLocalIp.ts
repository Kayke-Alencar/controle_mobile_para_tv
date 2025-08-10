import { NetworkInfo } from 'react-native-network-info'; // Importa o módulo para obter informações de rede

export default async function getLocalIp() {
    try{
        const localIp = await NetworkInfo.getIPV4Address(); // Obtém o IP local
        return localIp; // Retorna o IP local
    }
    catch(erro){
        throw new Error("Erro ao obter o IP local: " + erro.menssage); // Lança um erro se não for possível obter o IP
    } 
}