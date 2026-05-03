import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { layout } from "../styles/layout";

export default function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();
  const { dentro } = route.params;

  return (
    <View style={layout.centeredScreen}>
      <View style={layout.content}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          {dentro ? "Dentro da dieta ✅" : "Fora da dieta ❌"}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Text style={{ marginTop: 20, textAlign: "center" }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
