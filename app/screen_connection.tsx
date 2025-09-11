import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Zeroconf from 'react-native-zeroconf';

export default function App() {
  const [devices, setDevices] = useState([]);
  const zeroconf = new Zeroconf();

  useEffect(() => {
    zeroconf.on('start', () => console.log('🔎 Buscando dispositivos Chromecast/Android TV...'));

    zeroconf.on('found', (name) => console.log('Serviço encontrado:', name));

    zeroconf.on('resolved', (service) => {
      console.log('✅ Serviço resolvido:', service);
      // adiciona à lista se ainda não estiver
      setDevices(prev => {
        if (!prev.some(d => d.host === service.host && d.port === service.port)) {
          return [...prev, service];
        }
        return prev;
      });
    });

    zeroconf.on('error', (err) => console.log('Erro Zeroconf:', err));

    zeroconf.scan('googlecast', 'tcp', 'local.');

    return () => {
      zeroconf.stop();
      zeroconf.removeAllListeners();
    };
  }, []); //Vai iniciar assim que a tela for carregada

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={devices}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>IP: {item.host}</Text>
            <Text style={styles.text}>Porta: {item.port}</Text>
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
