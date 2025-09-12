import {
  FlatList,
  Text,
  View
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Zeroconf from 'react-native-zeroconf';

import { LinearGradient } from 'expo-linear-gradient';



export default function App() {

  const [devices, setDevices] = useState([]);
  const [devicePerMark, setDevicePerMark] = useState([])
  const zeroconf = new Zeroconf();


  //Só pode ser chamada aqui, diretamente no corpo do componente
  const {marca} = useLocalSearchParams() // vai devolver um objeto com os parametros enviados pelas rotas do router, No caso a marca na TV.

  const [teste, setTeste] = useState("undefinid")


  useEffect(() => {
    const SearchDevices = () => {
      zeroconf.scan('googlecast', 'tcp', 'local.'); //Inicia a busca na rede e mostra a msg no console
      
      //zeroconf.scan('airplay', 'tcp', 'local.') // TVS LG, Samsung, Sony, Vizio, TCL


      zeroconf.on('start', () => console.log('🔎 Buscando dispositivos Chromecast/Android TV...')); //avisa quando a busaca comecou 

      zeroconf.on('found', (name) => console.log('Serviço encontrado:', name)); //disparado quando qualquer serviço é detectado na rede., Ele captura o nome e mostra no console

      zeroconf.on('resolved', (service) => { //resolved é isparado quando o Zeroconf consegue obter todas as informações do serviço, como IP, porta, tipo, etc.s
        console.log('✅ Serviço resolvido:', service); //service é um obj com todos os detalhes do dispositivo encontrado
       
        setDevices(prev => { //prev é o estado anterior do devices

          // o some() verifica item por item do array se condicoes dentro dos parenteses sao verdadeira e retorna true ou false
          if (!prev.some(d => d.host === service.host && d.port === service.port)) { 
            return [...prev, service];
          }
          return prev;
        });
      });

      zeroconf.on('error', (err) => console.log('Erro Zeroconf:', err)); //dispara quando algo dá errado

      return () => {
        zeroconf.stop();
        zeroconf.removeAllListeners();
      };
    }

    SearchDevices();


  }, []); //Vai iniciar assim que a tela for carregada


  useEffect(() => {
    
    const filterDevices = () => {
      if(devices.length != 0){ //quando a pg é iniciada e devices e setado como um array fazio o que chama a func e gera erro, pois devices ainda nao foi montado
        let selectMark = `${marca}`.toLocaleLowerCase() //força marca para string com caixa baixa

        setDevicePerMark(
          devices.filter((iten)=>iten.name.toLocaleLowerCase().includes(selectMark))
        )
        setTeste(selectMark)
      }
      else{
        return undefined
      }  
    }
    filterDevices();

  }, [devices])

  return (
    <LinearGradient
      // Cores do gradiente
      colors={["rgba(0, 4, 41, 1)", "rgba(0, 1, 17, 1)"]}
      // Direção do gradiente
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      // Estilo da área com gradiente
      style={styles.teste}
    >

    
      <FlatList
        style={styles.list}
        data={devicePerMark}

        renderItem={({ item }) => (
          <View style={styles.card} >
            <Text style={styles.title}>{item.txt.fn}</Text>
            <Text style={styles.text}>IP: {item.host}</Text>
          </View>
        )}
        
        ListEmptyComponent={
        <Text style={styles.text}>Nenhum dispositivo encontrado</Text>
      }
      />


      </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  list: { marginTop: 20 },

  card: { 
    padding: 20, 
    backgroundColor: '#a7aabdff', 
    width:"95%",
    height:"90%",

    margin:"auto",
    borderRadius:15,
    marginBottom: 10 
  },

  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    paddingBottom:5,
    marginTop:-8,
  },
  text: { 
    fontSize: 20,

  },
  teste: {
    width:"100%",
    height:"100%",

  },
});
