import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { EmpreendedorismoScreen } from './src/screens/Empreendedorismo';
import { PortuguesScreen } from './src/screens/Portugues';
import { BiologiaScreen } from './src/screens/Biologia';
import { FisicaScreen } from './src/screens/Fisica';
import { DrawerContent } from './src/components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Empreendedorismo"
        screenOptions={{
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          drawerActiveTintColor: '#f4511e',
          drawerInactiveTintColor: '#333',
        }}
      >
        <Drawer.Screen 
          name="Empreendedorismo" 
          component={EmpreendedorismoScreen}
          options={{ title: 'Empreendedorismo: Marketing nas Vendas' }} 
        />
        <Drawer.Screen 
          name="Portugues" 
          component={PortuguesScreen}
          options={{ title: 'Português: A Hora da Estrela' }} 
        />
        <Drawer.Screen 
          name="Biologia" 
          component={BiologiaScreen}
          options={{ title: 'Biologia: Genética' }} 
        />
        <Drawer.Screen 
          name="Fisica" 
          component={FisicaScreen}
          options={{ title: 'Física: Energia Elétrica' }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}