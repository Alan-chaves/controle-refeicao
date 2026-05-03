import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { getRefeicoes } from "../storage/refeicoes";

export default function Estatisticas() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const data = await getRefeicoes();
    setLista(data);
  }

  const dentro = lista.filter((i) => i.dentro).length;
  const total = lista.length;
  const porcentagem = total ? ((dentro / total) * 100).toFixed(1) : 0;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Total: {total}</Text>
      <Text>Dentro: {dentro}</Text>
      <Text>Porcentagem: {porcentagem}%</Text>
    </View>
  );
}