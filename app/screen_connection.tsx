import {
  Text,
  View
} from 'react-native';

import Background from '@/components/Background';
import ListButtons from '@/components/ListButtons';
import React from 'react';
import { StyleSheet } from 'react-native';


import searchdevices from '../components/SearchDevices';



export default function App() {
  const devices = searchdevices()

  return (
    <Background>
      <ListButtons array={devices} dest={"layout_controle"}>
        {(item)=>(
          <>
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.host}</Text>
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
