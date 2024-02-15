import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Analise {
  name: string;
  uri: string;
}

export async function saveAnalises(temporaryUri: string, name: string) {
  const timestamp = new Date().getTime();
  const fileUri =
    (FileSystem.documentDirectory as string) +
    timestamp +
    "_" +
    name.split(" ").join("").toLowerCase() +
    ".png";

  await FileSystem.moveAsync({
    from: temporaryUri,
    to: fileUri,
  });

  let analises: Analise[] = [];
  try {
    const jsonValue = await AsyncStorage.getItem("analises");
    if (jsonValue !== null) {
      analises = JSON.parse(jsonValue);
    }
  } catch (e) {
    console.error("Erro ao obter dados de analises do AsyncStorage:", e);
  }

  const novoObjeto: Analise = { name, uri: fileUri };
  analises.push(novoObjeto);

  try {
    const jsonValue = JSON.stringify(analises);
    await AsyncStorage.setItem("analises", jsonValue);
  } catch (e) {
    console.error("Erro ao salvar dados de analises no AsyncStorage:", e);
  }

  return fileUri;
}

export async function getAnalises(): Promise<Analise[]> {
  let analises: Analise[] = [];

  try {
    const jsonValue = await AsyncStorage.getItem("analises");
    if (jsonValue !== null) {
      analises = JSON.parse(jsonValue);
    }
  } catch (e) {
    console.error("Erro ao obter dados de analises do AsyncStorage:", e);
  }

  return analises;
}

export async function deleteAnaliseByUri(uri: string): Promise<void> {
  try {
    let analises: Analise[] = [];
    const jsonValue = await AsyncStorage.getItem("analises");
    if (jsonValue !== null) {
      analises = JSON.parse(jsonValue);
      const updatedAnalises = analises.filter((analise) => analise.uri !== uri);
      await AsyncStorage.setItem("analises", JSON.stringify(updatedAnalises));
    }
  } catch (e) {
    console.error("Erro ao excluir a análise do AsyncStorage:", e);
  }
}

export async function clearAnalises(): Promise<void> {
  try {
    await AsyncStorage.removeItem("analises");
  } catch (e) {
    console.error("Erro ao limpar as análises do AsyncStorage:", e);
  }
}
