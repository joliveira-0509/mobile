import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './style';

export const FisicaScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Física: Energia Elétrica</Text>
      <Text style={styles.subtitle}>Fundamentos</Text>
      <Text style={styles.content}>
        A energia elétrica é a forma de energia associada ao movimento de cargas elétricas. Definida pela Lei de Ohm (V = I × R), onde V é tensão, I é corrente e R é resistência.
      </Text>
      <Text style={styles.subtitle}>Leis e Aplicações</Text>
      <Text style={styles.content}>
        - {`\u2022`} Potência elétrica: P = V × I, medida em watts.{'\n'}
        - {`\u2022`} Circuitos: Série (resistências somam) vs. paralelo (condutâncias somam).{'\n'}
        - {`\u2022`} Geração: Por indução eletromagnética (Lei de Faraday).{'\n'}
        - {`\u2022`} Eficiência: Perdas por efeito Joule (Q = I² × R × t).
      </Text>
      <Text style={styles.content}>
        Aplicação prática: Em residências, circuitos paralelos garantem distribuição uniforme de energia.
      </Text>
    </ScrollView>
  );
};