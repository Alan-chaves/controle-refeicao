import {
  Alert,
  Platform,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Trash2 } from "lucide-react-native";
import { getRefeicoes, removeRefeicao } from "../storage/refeicoes";
import { layout } from "../styles/layout";

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

  async function excluir(id) {
    try {
      await removeRefeicao(id);
      const dadosAtualizados = await getRefeicoes();
      setLista(dadosAtualizados);
    } catch (error) {
      Alert.alert("Erro", "Nao foi possivel excluir a refeicao.");
    }
  }

  function confirmarExclusao(item) {
    if (Platform.OS === "web") {
      const confirmou = window.confirm(
        `Deseja remover "${item.nome}" da lista?`
      );

      if (confirmou) {
        excluir(item.id);
      }

      return;
    }

    Alert.alert(
      "Excluir refeicao",
      `Deseja remover "${item.nome}" da lista?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => excluir(item.id),
        },
      ]
    );
  }

  return (
    <View style={layout.screen}>
      <FlatList
        data={lista}
        style={layout.content}
        contentContainerStyle={{ paddingBottom: 20 }}
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

            <TouchableOpacity
              onPress={() => confirmarExclusao(item)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{
                marginLeft: 12,
                backgroundColor: "#FDECEC",
                padding: 8,
                borderRadius: 8,
              }}
            >
              <Trash2 color="#D62828" size={18} />
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
