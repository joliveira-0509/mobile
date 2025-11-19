import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './style';

export const PortuguesScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Português: A Hora da Estrela de Clarice Lispector</Text>
      <Text style={styles.subtitle}>Resumo da Obra</Text>
      <Text style={styles.content}>
        Publicado em 1977, "A Hora da Estrela" é o último romance de Clarice Lispector. Narra a vida de Macabéa, uma nordestina pobre e analfabeta em São Paulo, através da perspectiva do narrador Rodrigo S.M., que reflete sobre a insignificância humana.
      </Text>
      <Text style={styles.subtitle}>Temas Principais</Text>
      <Text style={styles.content}>
        - {`\u2022`} Existencialismo: A busca por identidade em um mundo indiferente.{'\n'}
        - {`\u2022`} Marginalidade social: Crítica à desigualdade e à invisibilidade das classes baixas.{'\n'}
        - {`\u2022`} Linguagem experimental: Fluxo de consciência e metalinguagem.{'\n'}
        - {`\u2022`} Simbolismo: A estrela como metáfora de aspiração inalcançável.
      </Text>
      <Text style={styles.content}>
        Impacto: A obra questiona a narrativa tradicional, convidando o leitor a confrontar o absurdo da existência.
      </Text>
    </ScrollView>
  );
};