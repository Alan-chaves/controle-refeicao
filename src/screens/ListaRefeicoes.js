import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { getRefeicoes, salvarRefeicoes } from "../storage/refeicoes";

export default function ListaRefeicoes() {
  const navigation = useNavigation();
  const [lista, setLista] = useState([]);

  async function carregar() {
    const data = await getRefeicoes();
    setLista(data);
  }

  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [])
  );

  // 🔥 EXCLUIR (SEM ALERT PARA FUNCIONAR 100%)
  async function excluir(id) {
    const dados = await getRefeicoes();
    const novaLista = dados.filter((item) => item.id !== id);

    await salvarRefeicoes(novaLista);
    setLista(novaLista);
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#eee",
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("detalhes", { item })}
              style={{ flex: 1 }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.nome}</Text>

              <Text
                style={{
                  color: item.dentro ? "green" : "red",
                  marginTop: 5,
                }}
              >
                {item.dentro ? "Dentro da dieta" : "Fora da dieta"}
              </Text>
            </TouchableOpacity>

            {/* LIXEIRA FUNCIONANDO */}
            <TouchableOpacity onPress={() => excluir(item.id)}>
              <Text style={{ color: "red", fontSize: 20 }}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            style={{
              backgroundColor: "#333",
              padding: 12,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Voltar para Home
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}