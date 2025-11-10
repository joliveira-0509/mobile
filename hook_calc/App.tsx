import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [count, setCount] = useState(0);
  const [countTen, setCountTen] = useState(0);
  const [countHundred, setCountHundred] = useState(0);

  function contador() {
    console.log("Contado");
    setCount(count + 1);
    setCountTen(countTen + 10);
    setCountHundred(countHundred + 100);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Teste de contagem</Text>
        <Button onPress={contador} title="Contar" />
      </View>
      <View style={styles.box}>
      <Text style={styles.TextBox}>Contador Simples: {count}</Text>
      <Text style={styles.TextBox}>Contador de Dezena: {countTen}</Text>
      <Text style={styles.TextBox}>Contador de Centena: {countHundred}</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    height: 100,
    marginBottom: 40,
    alignItems: 'center',
    gap: 20,
    flexDirection: 'row',
  },
  box:{
    width: '80%',
    height: 200,
    backgroundColor: '#c4c4c5ff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 20,
    
  },
  TextBox:{
    fontSize: 20,
    fontWeight: 'bold',
  }
});
