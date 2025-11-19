import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';

export const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20, backgroundColor: '#f0f0f0' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Menu Educacional
        </Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          Selecione uma disciplina
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};