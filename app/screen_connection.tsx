import {
  Text,
  View
} from 'react-native';

import React from 'react';
import { StyleSheet } from 'react-native';

import { useLocalSearchParams } from 'expo-router/build/hooks';

import Background from '@/components/Background';
import ListButtons from '@/components/ListButtons';
import searchdevices from '../components/SearchDevices';



export default function App() {
  const params = useLocalSearchParams()
  const devices = searchdevices(params)

  return (
    <Background>

      <View style={{ marginTop: 40 }}> {/* Apenas para o primeiro btt nao grudar em cima  */}

      </View>

      <ListButtons array={devices} dest={"layout_controle"}>
        {(item) => (
          <>
            <View>
              <Text style={styles.title}>{item.name.slice(0, 10)}.....</Text>
              <Text style={styles.text}>{item.host}</Text>
            </View>
          </>
        )}
      </ListButtons>

    </Background>
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
    //fontWeight: 'bold', 
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
