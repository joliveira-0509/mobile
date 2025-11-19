import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './style';

export const EmpreendedorismoScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Empreendedorismo: Marketing nas Vendas</Text>
      <Text style={styles.subtitle}>Conceitos Fundamentais</Text>
      <Text style={styles.content}>
        O marketing nas vendas é uma estratégia integrada que combina técnicas de promoção para impulsionar o desempenho comercial. Diferente do marketing tradicional, foca em táticas de conversão direta, como funis de vendas e análise de leads.
      </Text>
      <Text style={styles.subtitle}>Estratégias Chave</Text>
      <Text style={styles.content}>
        - {`\u2022`} Identificação de público-alvo: Segmentação demográfica e comportamental.{'\n'}
        - {`\u2022`} Conteúdo persuasivo: Uso de storytelling para engajar clientes.{'\n'}
        - {`\u2022`} Métricas de sucesso: ROI (Retorno sobre Investimento) e taxa de conversão.{'\n'}
        - {`\u2022`} Ferramentas: CRM como Salesforce e automação de e-mail.
      </Text>
      <Text style={styles.content}>
        Aplicação prática: Em um startup, integre marketing digital com vendas para reduzir o ciclo de compra em até 30%.
      </Text>
    </ScrollView>
  );
};