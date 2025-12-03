import { useEffect, useState } from 'react';

import Zeroconf from 'react-native-zeroconf';

export default function searchdevices(Params) {
    const [devices, setDevices] = useState([]);
    const [deviceByMark, setDeviceByMark] = useState([]);
    const zeroconf = new Zeroconf();


    //Só pode ser chamada aqui, diretamente no corpo do componente nunca dentro de um func
    const [teste, setTeste] = useState("undefinid");

    const search = () => {
        zeroconf.scan(`${Params.service}`, 'tcp', 'local'); // TVS LG, Samsung, Sony, Vizio, TCL

        zeroconf.on('start', () => console.log(`🔎 Buscando dispositivos ${Params.name}`)); //avisa quando a busca comecou 

        zeroconf.on('found', (name) => console.log('Serviço encontrado:', name)); //disparado quando qualquer serviço é detectado na rede., Ele captura o nome e mostra no console

        zeroconf.on('resolved', (service) => { //resolved é esparado quando o Zeroconf consegue obter todas as informações do serviço, como IP, porta, tipo, etc.s
            console.log('✅ Serviço resolvido:', service); //service é um obj com todos os detalhes do dispositivo encontrado

            setDevices(prev => { //prev é o estado anterior do devices
                // o some() verifica item por item do array se a condicao dentro dos parenteses for verdadeiras e retorna true ou false
                if (!prev.some(d => d.host === service.host && d.port === service.port)) {
                    return [...prev, service];
                }
                return prev;
            });
        });

        zeroconf.on('error', (err) => console.log('Erro Zeroconf:', err)); //dispara quando algo dá errado

        /*
        return () => {
            zeroconf.stop();
            zeroconf.removeAllListeners();
        };*/
        
    }

    search();

    useEffect(() => {
        const filterDevices = () => {
            if (devices.length != 0) { //quando a pg é iniciada e devices e setado como um array vazio o que chama a func e gera erro, pois devices ainda nao foi montado
                let selectMark = `${Params.name}`.toLocaleLowerCase(); //força marca para string com caixa baixa

                setDeviceByMark(
                    devices.filter((item) => item.name.toLocaleLowerCase().includes(selectMark))
                );
                setTeste(selectMark);
            }
            else {
                return undefined
            }
        }
        filterDevices();
    }, [devices]);


    return deviceByMark;
}