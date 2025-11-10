import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Button } from './src/componentes/Button';


export default function App() {
  return (
    /*     <View style={styles.container}>
          <Text style={styles.text}>Hello, world karai</Text>
          <View>
            <View>
              <FontAwesome5 name="shopping-bag" size={30} color="black" />
              <Text>Comprar</Text>
            </View>
            <Button title='adicionar' />
          </View>
    
        </View> */
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome5 name="shopping-bag" size={30} color="blue" />
        <Text style={styles.textTitle}>Comprar</Text>
      </View>
      <Button title="Adicionar" onPress={()=>console.log("Adicionar")}/>
      <Button title="Criar Conta" onPress={()=>console.log("Criar Conta")}/>
      <Button title="Salvar" onPress={()=>console.log("Salvar")}/>
      <Button title="Voltar" onPress={()=>Alert.alert("Voltar")}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c5ff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  title: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    fontStyle: 'italic',
  },
});
