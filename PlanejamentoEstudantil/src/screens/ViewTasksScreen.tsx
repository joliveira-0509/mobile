import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTasks } from '../context/TaskContext';
import styles from './ViewTasksScreenStyles';

interface Task {
  id: number;
  description: string;
  priority: 'Baixa' | 'Média' | 'Alta';
  dueDate: Date;
  completed: boolean;
  urgency: number;
}

/**
 * View Tasks Screen - Tela para visualizar e gerenciar tarefas
 */
const ViewTasksScreen: React.FC = () => {
  const navigation = useNavigation();
  const { tasks, toggleComplete } = useTasks();

  // Ordenar por prioridade: Alta > Média > Baixa, depois por urgência
  const sortedTasks = [...tasks].sort((a, b) => {
    const prioOrder: { [key: string]: number } = { 'Alta': 3, 'Média': 2, 'Baixa': 1 };
    if (prioOrder[a.priority] !== prioOrder[b.priority]) {
      return prioOrder[b.priority] - prioOrder[a.priority];
    }
    return a.urgency - b.urgency;
  });

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'Alta':
        return [styles.item, styles.itemHigh];
      case 'Média':
        return [styles.item, styles.itemMedium];
      case 'Baixa':
        return [styles.item, styles.itemLow];
      default:
        return styles.item;
    }
  };

  const getPriorityBadgeStyle = (priority: string) => {
    switch (priority) {
      case 'Alta':
        return [styles.priorityBadge, styles.priorityHigh];
      case 'Média':
        return [styles.priorityBadge, styles.priorityMedium];
      case 'Baixa':
        return [styles.priorityBadge, styles.priorityLow];
      default:
        return styles.priorityBadge;
    }
  };

  const getPriorityTextStyle = (priority: string) => {
    switch (priority) {
      case 'Alta':
        return [styles.priorityText, styles.priorityTextHigh];
      case 'Média':
        return [styles.priorityText, styles.priorityTextMedium];
      case 'Baixa':
        return [styles.priorityText, styles.priorityTextLow];
      default:
        return styles.priorityText;
    }
  };

  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TouchableOpacity
      style={getPriorityStyle(item.priority)}
      onPress={() => toggleComplete(item.id)}
      activeOpacity={0.7}
    >
      <Text style={[styles.desc, item.completed && styles.completed]}>
        {item.completed ? '✓ ' : ''}{item.description}
      </Text>

      <View style={styles.infoRow}>
        <View style={getPriorityBadgeStyle(item.priority)}>
          <Text style={getPriorityTextStyle(item.priority)}>
            {item.priority}
          </Text>
        </View>

        <View style={[
          styles.statusBadge,
          item.completed ? styles.statusCompleted : styles.statusPending
        ]}>
          <Text style={[
            styles.statusText,
            item.completed ? styles.statusTextCompleted : styles.statusTextPending
          ]}>
            {item.completed ? 'Concluída' : 'Pendente'}
          </Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoText}>
          📅 {new Date(item.dueDate).toLocaleDateString('pt-BR')}
        </Text>
        <Text style={[
          styles.urgencyText,
          item.urgency <= 2 && styles.urgencyHigh
        ]}>
          ⏰ {item.urgency} dias
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Tarefas ({sortedTasks.length})</Text>
      </View>

      {/* List */}
      <View style={{ flex: 1 }}>
        {sortedTasks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhuma tarefa cadastrada! 📝{'\n'}Comece adicionando uma nova tarefa.
            </Text>
          </View>
        ) : (
          <FlatList
            data={sortedTasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={{ paddingVertical: 12, paddingHorizontal: 16, alignItems: 'center' }}
          onPress={() => navigation.navigate('Home' as never)}
        >
          <Text style={{ color: '#6C5CE7', fontSize: 16, fontWeight: '600' }}>
            ← Voltar ao Início
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewTasksScreen;