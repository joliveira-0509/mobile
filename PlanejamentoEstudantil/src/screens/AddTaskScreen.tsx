import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTasks } from '../context/TaskContext';
import styles from './AddTaskScreenStyles';

/**
 * Add Task Screen - Tela para adicionar novas tarefas
 */
const AddTaskScreen: React.FC = () => {
  const navigation = useNavigation();
  const { addTask } = useTasks();
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Média');
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const validateAndAdd = () => {
    // Validar descrição
    if (!description.trim()) {
      setIsValid(false);
      setErrorMessage('A descrição da tarefa é obrigatória.');
      return;
    }

    // Validar data
    if (dueDate <= new Date()) {
      setIsValid(false);
      setErrorMessage('A data deve ser no futuro.');
      return;
    }

    setIsValid(true);
    setErrorMessage('');
    addTask(description.trim(), priority, dueDate);
    Alert.alert('Sucesso! ✓', 'Tarefa adicionada com sucesso!');
    navigation.goBack();
  };

  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(false);
    if (date) setDueDate(date);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Criar Nova Tarefa</Text>
      </View>

      {/* Error Message */}
      {!isValid && errorMessage && (
        <View style={styles.error}>
          <Text style={styles.errorText}>⚠️ {errorMessage}</Text>
        </View>
      )}

      {/* Form */}
      <View style={styles.formSection}>
        <Text style={styles.label}>📝 Descrição da Tarefa</Text>
        <TextInput
          style={[styles.input, !isValid && styles.inputError]}
          value={description}
          onChangeText={(text) => {
            setDescription(text);
            setIsValid(true);
            setErrorMessage('');
          }}
          placeholder="Ex: Estudar para a prova de Matemática"
          placeholderTextColor="#999"
          multiline
        />
      </View>

      <View style={styles.formSection}>
        <Text style={styles.label}>⭐ Prioridade</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={priority}
            onValueChange={(value: string) => setPriority(value)}
            style={styles.picker}
          >
            <Picker.Item label="🟢 Baixa" value="Baixa" />
            <Picker.Item label="🟡 Média" value="Média" />
            <Picker.Item label="🔴 Alta" value="Alta" />
          </Picker>
        </View>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.label}>📅 Data de Entrega</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateButtonText}>Selecionar Data</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={dueDate}
            mode="date"
            display="default"
            minimumDate={new Date()}
            onChange={handleDateChange}
          />
        )}

        <View style={styles.dateSelected}>
          <Text style={styles.dateSelectedText}>
            Selecionado: {formatDate(dueDate)}
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary, styles.buttonFlex]}
          onPress={validateAndAdd}
        >
          <Text style={styles.buttonText}>✓ Salvar Tarefa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary, styles.buttonFlex]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonSecondaryText}>← Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddTaskScreen;