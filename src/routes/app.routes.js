import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// IMPORTS DAS TELAS
import Home from "../screens/Home";
import NovaRefeicao from "../screens/NovaRefeicao";
import ListaRefeicoes from "../screens/ListaRefeicoes";
import Detalhes from "../screens/Detalhes";
import Estatisticas from "../screens/Estatisticas";
import Feedback from "../screens/Feedback";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* Tela inicial */}
        <Stack.Screen name="home" component={Home} />

        {/* Criar refeição */}
        <Stack.Screen name="nova" component={NovaRefeicao} />

        {/* Lista de refeições */}
        <Stack.Screen name="lista" component={ListaRefeicoes} />

        {/* Detalhes */}
        <Stack.Screen name="detalhes" component={Detalhes} />

        {/* Feedback */}
        <Stack.Screen name="feedback" component={Feedback} />

        {/* Estatísticas (opcional, mas mantive) */}
        <Stack.Screen name="estatisticas" component={Estatisticas} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}