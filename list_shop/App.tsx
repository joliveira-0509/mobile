import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Input } from "./src/components/input/Input";
import { styles } from "./styles";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Produto = {
  nome: string;
};

export default function App() {

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoAdd, setProdutoAdd] = useState("");



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <View>
        <Input
          placeH="Digite o produto"
          onChangeText={setProdutoAdd}
          value={produtoAdd}
          style={{ flex: 2 }}
        />
        <MaterialIcons name="add-circle-outline" size={24} color="black" />
      </View>
    </View>
  )
} 