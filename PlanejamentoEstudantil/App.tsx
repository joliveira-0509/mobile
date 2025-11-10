import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TaskProvider } from './src/context/TaskContext';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import ViewTasksScreen from './src/screens/ViewTasksScreen';
import ReportsScreen from './src/screens/ReportsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Organizador de Tarefas Estudantis' }} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Adicionar Tarefa' }} />
          <Stack.Screen name="ViewTasks" component={ViewTasksScreen} options={{ title: 'Visualizar Tarefas' }} />
          <Stack.Screen name="Reports" component={ReportsScreen} options={{ title: 'Relatórios' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}