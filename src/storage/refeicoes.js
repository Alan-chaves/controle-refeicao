import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@refeicoes";

// 🔹 PEGAR TODAS AS REFEIÇÕES
export async function getRefeicoes() {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// 🔹 SALVAR LISTA
async function saveRefeicoes(lista) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

// 🔹 ADICIONAR REFEIÇÃO
export async function addRefeicao(novaRefeicao) {
  const lista = await getRefeicoes();

  lista.push(novaRefeicao);

  await saveRefeicoes(lista);
}

// 🔹 REMOVER REFEIÇÃO
export async function removeRefeicao(id) {
  const lista = await getRefeicoes();

  const novaLista = lista.filter((item) => item.id !== id);

  await saveRefeicoes(novaLista);
}

// 🔹 BUSCAR POR ID
export async function getRefeicaoById(id) {
  const lista = await getRefeicoes();

  return lista.find((item) => item.id === id);
}