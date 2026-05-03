import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@refeicoes";

export async function getRefeicoes() {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export async function salvarRefeicoes(lista) {
  await AsyncStorage.setItem(KEY, JSON.stringify(lista));
}