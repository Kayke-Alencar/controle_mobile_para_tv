import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import React from 'react';


import { useLocalSearchParams } from 'expo-router/build/hooks';

import Background from '@/components/Background';
import ListButtons from '@/components/ListButtons';
import searchdevices from '../services/searchDevices';



export default function App() {
  const {obj} = useLocalSearchParams()

  //param: verifica se é um array de string ou uma string, Se for array faz o join() e transofoema em string se nao apenas a retorna, 
  // logo em seguida a str "jSON" e transformada em obj js 
  const param = JSON.parse(Array.isArray(obj) ? obj.join('') : obj); 

  const mark = param.default //obj com atributos da marca em que o usuario clicou, é enviado por padrao pelos btns do ListButtons 
  const devicesFound = searchdevices(mark); //busca dispositivos de uma marca especifica na rede


  const render = () => {
    if (devicesFound.length != 0) {
      return (
        <Background>

          <Text style={styles.title}>TVs Encontrados</Text>

          <ListButtons array={devicesFound} dest={"layout_controle"} param={mark}>
            {(item) => (
              <>
                <View>
                  <Text style={styles.titleButton}>{item.name.slice(0, 15)}.....</Text>
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
