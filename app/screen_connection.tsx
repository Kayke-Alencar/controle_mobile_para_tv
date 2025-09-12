import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Zeroconf from 'react-native-zeroconf';
export default function App() {

  const [devices, setDevices] = useState([]);
  const zeroconf = new Zeroconf();


  //Só pode ser chamada aqui, diretamente no corpo do componente
  const {marca} = useLocalSearchParams() // vai devolver um objeto com os parametros enviados pelas rotas do router, No caso a marca na TV.

  const [teste, setTeste] = useState("undefinid")


  useEffect(() => {
    const SearchDevices = () => {
      zeroconf.scan('googlecast', 'tcp', 'local.'); //Inicia a busca na rede e mostra a msg no console
      zeroconf.on('start', () => console.log('🔎 Buscando dispositivos Chromecast/Android TV...')); //avisa quando a busaca comecou 
      zeroconf.on('found', (name) => console.log('Serviço encontrado:', name)); //disparado quando qualquer serviço é detectado na rede., Ele captura o nome e mostra no console

      zeroconf.on('resolved', (service) => { //resolved é isparado quando o Zeroconf consegue obter todas as informações do serviço, como IP, porta, tipo, etc.s
        console.log('✅ Serviço resolvido:', service); //service é um obj com todos os detalhes do dispositivo encontrado
       
        setDevices(prev => {
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
      let marca = "Chromecast"
      let i = 0
     //const sla = devices[0].host
      
      
    }

    filterDevices();

  }, devices)




  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={devices}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card} >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>IP: {item.host}</Text>
            <Text style={styles.text}>Porta: {item.port}</Text>
            <Text style={styles.text}>{teste}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.text}>Nenhum dispositivo encontrado</Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  list: { marginTop: 20 },
  card: { padding: 15, backgroundColor: '#f5f5f5', borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  text: { fontSize: 14 }
});
