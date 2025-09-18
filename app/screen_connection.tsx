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
  const {obj} = useLocalSearchParams()

  //param: verica se é um array de string ou uma string, Se for array faz o join() que tranforma em string se nao apenas retorna o obj, dps transforma o "jSON" em obj js 
  const index_params = JSON.parse(Array.isArray(obj) ? obj.join('') : obj); 
  
  const devices = searchdevices(index_params.default)


  const render = () => {
    if (devices.length != 0) {
      return (
        <Background>

          <Text style={styles.title}>Dispositivos Encontrados</Text>

          <ListButtons array={devices} dest={"layout_controle"} param={index_params}>
            {(item) => (
              <>
                <View>
                  <Text style={styles.titleButton}>{item.name.slice(0, 10)}.....</Text>
                  <Text style={styles.text}>{item.host}</Text>
                </View>
              </>
            )}
          </ListButtons>

        </Background>
      )
    }

    else {
      return (
        <Background>
            <View style={styles.notDevices}>
              <Text style={styles.txtNotDevices}>Nenhum Dispositivo</Text>
              <Text style={styles.txtNotDevices}>Encontrado</Text>
            </View>
        </Background>
      )
    }
  }


  return render()
}


const styles = StyleSheet.create({
  title: {
    padding: 10,
    marginBottom: 20,

    color: "white",
    fontSize: 30,
    fontWeight: "bold",

  },
  card: {
    padding: 20,
    backgroundColor: '#a7aabdff',
    width: "95%",
    height: "90%",

    margin: "auto",
    borderRadius: 15,
    marginBottom: 10
  },

  titleButton: {
    fontSize: 25,
    //fontWeight: 'bold', 
    
    marginTop: -8,
  },
  notDevices: {
    width:"100%",
    height:"100%",             
    justifyContent: "center",// centraliza verticalmente
    alignItems: "center",    // centraliza horizontalmente

  },
  
  txtNotDevices: {
    color: "white",
    fontSize: 30,
    fontWeight:"bold",
  },

  text: {
    fontSize: 20,

  },
  teste: {
    width: "100%",
    height: "100%",

  },
});
