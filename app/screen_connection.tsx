import {
  FlatList,
  Text,
  View
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';

import searchdevices from '../components/SearchDevices';

export default function App() {
  const devices = searchdevices()

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
        data={devices}

        renderItem={({item}) => (
          <View style={styles.card} >
            <Text style={styles.title}>{item.name}</Text> {/* item.txt.fn*/}
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
