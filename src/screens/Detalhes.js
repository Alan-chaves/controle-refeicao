import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { layout } from "../styles/layout";

export default function Detalhes() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={layout.screen}>
      <View style={layout.content}>
        <Text style={{ fontSize: 20 }}>{item.nome}</Text>

        <Text style={{ marginTop: 10 }}>{item.descricao}</Text>

        <Text
          style={{
            marginTop: 10,
            color: item.dentro ? "green" : "red",
          }}
        >
          {item.dentro ? "Dentro da dieta" : "Fora da dieta"}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#333",
            padding: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
