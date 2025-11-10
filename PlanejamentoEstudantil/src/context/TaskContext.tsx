import React, { createContext, useContext, useState, ReactNode } from "react";

/**
 * Interface para tipagem forte de tarefas
 */
interface Task {
    id: number;
    description: string;
    priority: 'Baixa' | 'Média' | 'Alta';
    dueDate: Date;
    completed: boolean;
    urgency: number;
}

/**
 * Interface para tipagem do contexto de tarefas
 */
interface TasksContextType {
    tasks: Task[];
    addTask: (description: string, priority: string, dueDate: Date) => void;
    toggleComplete: (id: number) => void;
    deleteTask: (id: number) => void;
    getPendingCount: () => number;
    getCompletedCount: () => number;
    getCompletionRate: () => number;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (description: string, priority: string, dueDate: Date): void => {
        const urgency = Math.max(0, Math.ceil((dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
        setTasks(prev => [...prev, { 
            id: Date.now(), 
            description, 
            priority: priority as 'Baixa' | 'Média' | 'Alta',
            dueDate, 
            completed: false, 
            urgency 
        }]);
    };

    const toggleComplete = (id: number): void => {
        setTasks(prev => prev.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id: number): void => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const getPendingCount = (): number => tasks.filter(t => !t.completed).length;
    
    const getCompletedCount = (): number => tasks.filter(t => t.completed).length;
    
    const getCompletionRate = (): number => tasks.length > 0 ? (getCompletedCount() / tasks.length) * 100 : 0;

    return (
        <TasksContext.Provider value={{ tasks, addTask, toggleComplete, deleteTask, getPendingCount, getCompletedCount, getCompletionRate }}>
            {children}
        </TasksContext.Provider>
    );
};

/**
 * Hook customizado para usar o contexto de tarefas
 * @throws Erro se usado fora do TaskProvider
 */
export const useTasks = (): TasksContextType => {
    const context = useContext(TasksContext);
    if (!context) throw new Error('useTasks deve ser usado dentro de TaskProvider');
    return context;
};