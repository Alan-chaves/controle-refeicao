import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      
      <TouchableOpacity
        onPress={() => navigation.navigate("nova")}
        style={{
          backgroundColor: "#333",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Nova Refeição
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("lista")}
        style={{
          backgroundColor: "#6C4DD9",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Consultar Refeições
        </Text>
      </TouchableOpacity>

    </View>
  );
}