import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTasks } from '../context/TaskContext';
import styles from './ReportsScreenStyles';

/**
 * Reports Screen - Tela de relatórios e estatísticas
 */
const ReportsScreen: React.FC = () => {
  const navigation = useNavigation();
  const { getCompletionRate, getPendingCount, getCompletedCount, tasks } = useTasks();

  const completionRate = getCompletionRate();
  const pendingCount = getPendingCount();
  const completedCount = getCompletedCount();
  const totalTasks = tasks.length;

  // Calcular estatísticas por prioridade
  const highPriorityTasks = tasks.filter(t => t.priority === 'Alta').length;
  const mediumPriorityTasks = tasks.filter(t => t.priority === 'Média').length;
  const lowPriorityTasks = tasks.filter(t => t.priority === 'Baixa').length;

  // Calcular média de urgência
  const avgUrgency = totalTasks > 0 
    ? Math.round(tasks.reduce((sum, t) => sum + t.urgency, 0) / totalTasks) 
    : 0;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Relatórios 📊</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {totalTasks === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhuma tarefa cadastrada ainda!{'\n'}Crie uma tarefa para visualizar relatórios.
            </Text>
          </View>
        ) : (
          <>
            {/* Progress Card */}
            <View style={styles.progressCard}>
              <Text style={styles.progressTitle}>Taxa de Conclusão</Text>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${completionRate}%` }
                  ]}
                />
              </View>
              <Text style={styles.progressText}>
                {completionRate.toFixed(1)}% ({completedCount} de {totalTasks})
              </Text>
            </View>

            {/* Summary Card */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Resumo Geral</Text>

              <View style={styles.statRow}>
                <Text style={styles.statLabel}>📋 Total de Tarefas</Text>
                <Text style={styles.statValue}>{totalTasks}</Text>
              </View>

              <View style={styles.statRow}>
                <Text style={styles.statLabel}>✓ Concluídas</Text>
                <Text style={[styles.statValue, { color: '#00B894' }]}>{completedCount}</Text>
              </View>

              <View style={styles.statRow}>
                <Text style={styles.statLabel}>⏳ Pendentes</Text>
                <Text style={[styles.statValue, { color: '#FF7675' }]}>{pendingCount}</Text>
              </View>
            </View>

            {/* Priority Breakdown */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Distribuição por Prioridade</Text>

              <View style={styles.statRow}>
                <Text style={styles.statLabel}>🔴 Alta Prioridade</Text>
                <Text style={[styles.statValue, { color: '#FF7675' }]}>{highPriorityTasks}</Text>
              </View>

              <View style={styles.statRow}>
                <Text style={styles.statLabel}>🟡 Média Prioridade</Text>
                <Text style={[styles.statValue, { color: '#FDCB6E' }]}>{mediumPriorityTasks}</Text>
              </View>

              <View style={styles.statRow}>
                <Text style={styles.statLabel}>🟢 Baixa Prioridade</Text>
                <Text style={[styles.statValue, { color: '#00B894' }]}>{lowPriorityTasks}</Text>
              </View>
            </View>

            {/* Urgency Stats */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Análise de Prazos</Text>

              <View style={styles.statRow}>
                <Text style={styles.statLabel}>⏰ Média de Dias Restantes</Text>
                <Text style={styles.statValue}>{avgUrgency} dias</Text>
              </View>

              <View style={styles.statRow}>
                <Text style={styles.statLabel}>📅 Tarefas Urgentes (≤2 dias)</Text>
                <Text style={[
                  styles.statValue,
                  { color: tasks.filter(t => t.urgency <= 2).length > 0 ? '#FF7675' : '#00B894' }
                ]}>
                  {tasks.filter(t => t.urgency <= 2).length}
                </Text>
              </View>
            </View>

            {/* Insights */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Dicas de Produtividade</Text>
              {completionRate >= 80 && (
                <Text style={{ fontSize: 14, color: '#00B894', marginVertical: 8 }}>
                  🎉 Excelente desempenho! Continue assim!
                </Text>
              )}
              {completionRate >= 50 && completionRate < 80 && (
                <Text style={{ fontSize: 14, color: '#FDCB6E', marginVertical: 8 }}>
                  ⚡ Bom progresso! Mais um pouco para melhorar!
                </Text>
              )}
              {completionRate < 50 && completionRate > 0 && (
                <Text style={{ fontSize: 14, color: '#FF7675', marginVertical: 8 }}>
                  ⚠️ Que tal focar nas tarefas pendentes?
                </Text>
              )}
              {totalTasks > 0 && completionRate === 0 && (
                <Text style={{ fontSize: 14, color: '#74B9FF', marginVertical: 8 }}>
                  💡 Comece a completar suas tarefas para ganhar impulso!
                </Text>
              )}
            </View>
          </>
        )}
      </View>

      {/* Footer Button */}
      <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => navigation.navigate('Home' as never)}
        >
          <Text style={styles.buttonText}>← Voltar ao Início</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReportsScreen;