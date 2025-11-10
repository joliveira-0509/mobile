import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTasks } from '../context/TaskContext';
import styles from './HomeScreenStyles';

/**
 * Home Screen - Tela inicial com visão geral de tarefas
 */
const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { getPendingCount, getCompletedCount, tasks } = useTasks();

  const pendingCount = getPendingCount();
  const completedCount = getCompletedCount();
  const totalTasks = tasks.length;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Meu Plano</Text>
        <Text style={styles.subtitle}>Organize seus estudos de forma eficiente</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalTasks}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{pendingCount}</Text>
          <Text style={styles.statLabel}>Pendentes</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{completedCount}</Text>
          <Text style={styles.statLabel}>Concluídas</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => navigation.navigate('AddTask' as never)}
        >
          <Text style={styles.buttonText}>+ Adicionar Tarefa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate('ViewTasks' as never)}
        >
          <Text style={styles.buttonText}>📋 Ver Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonTertiary]}
          onPress={() => navigation.navigate('Reports' as never)}
        >
          <Text style={styles.buttonText}>📊 Relatórios</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;