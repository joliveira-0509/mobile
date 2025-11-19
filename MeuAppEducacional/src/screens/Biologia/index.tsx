import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './style';

export const BiologiaScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Biologia: Genética</Text>
      <Text style={styles.subtitle}>Princípios Básicos</Text>
      <Text style={styles.content}>
        A genética estuda a herança de características biológicas. Baseia-se nas leis de Mendel (1865), que descrevem padrões de transmissão de traços via alelos dominantes e recessivos.
      </Text>
      <Text style={styles.subtitle}>Conceitos Avançados</Text>
      <Text style={styles.content}>
        - {`\u2022`} DNA e RNA: Estruturas nucleotídicas que codificam genes.{'\n'}
        - {`\u2022`} Mutação e variação: Alterações genéticas que impulsionam a evolução.{'\n'}
        - {`\u2022`} Herança mendeliana: Cruzamentos mono e di-híbridos.{'\n'}
        - {`\u2022`} Genética molecular: PCR e sequenciamento de genomas.
      </Text>
      <Text style={styles.content}>
        Aplicação: Na medicina, testes genéticos identificam riscos de doenças hereditárias como a fibrose cística.
      </Text>
    </ScrollView>
  );
};