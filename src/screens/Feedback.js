import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();
  const { dentro } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>
        {dentro ? "Dentro da dieta ✅" : "Fora da dieta ❌"}
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Text style={{ marginTop: 20 }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}