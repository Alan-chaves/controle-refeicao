import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// ⚠️ IMPORTA SUA FUNÇÃO DE SALVAR
import { addRefeicao } from "../storage/refeicoes";

export default function NovaRefeicao() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dentro, setDentro] = useState(true);

  async function salvar() {
    if (!nome || !descricao) return;

    await addRefeicao({
      id: Date.now().toString(),
      nome,
      descricao,
      dentro,
      data: new Date().toLocaleDateString("pt-BR"),
    });

    navigation.goBack();
  }

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 50 }}>
      
      {/* NOME */}
      <Text>Nome</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          marginBottom: 10,
          padding: 8,
        }}
      />

      {/* DESCRIÇÃO */}
      <Text>Descrição</Text>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        multiline
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          marginBottom: 10,
          padding: 8,
          height: 80,
        }}
      />

      {/* STATUS */}
      <Text>Status:</Text>

      <TouchableOpacity
        onPress={() => setDentro(true)}
        style={{
          backgroundColor: dentro ? "green" : "#ccc",
          padding: 10,
          marginTop: 5,
        }}
      >
        <Text style={{ color: "#fff" }}>Dentro da dieta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setDentro(false)}
        style={{
          backgroundColor: !dentro ? "red" : "#ccc",
          padding: 10,
          marginTop: 5,
        }}
      >
        <Text style={{ color: "#fff" }}>Fora da dieta</Text>
      </TouchableOpacity>

      {/* SALVAR */}
      <TouchableOpacity
        onPress={salvar}
        style={{
          backgroundColor: "#333",
          padding: 12,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Salvar
        </Text>
      </TouchableOpacity>

      {/* CANCELAR */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "#ccc",
          padding: 12,
          marginTop: 10,
        }}
      >
        <Text style={{ textAlign: "center" }}>
          Cancelar
        </Text>
      </TouchableOpacity>
    </View>
  );
}