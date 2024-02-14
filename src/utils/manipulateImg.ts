import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  let analises: { name: string; uri: string }[] = [];
  try {
    const jsonValue = await AsyncStorage.getItem("analises");
    if (jsonValue !== null) {
      analises = JSON.parse(jsonValue);
    }
  } catch (e) {
    console.error("Erro ao obter dados de analises do AsyncStorage:", e);
  }

  const novoObjeto = { name, uri: fileUri };
  analises.push(novoObjeto);

  try {
    const jsonValue = JSON.stringify(analises);
    await AsyncStorage.setItem("analises", jsonValue);
  } catch (e) {
    console.error("Erro ao salvar dados de analises no AsyncStorage:", e);
  }

  return fileUri;
}

export async function getAnalises(): Promise<{ name: string; uri: string }[]> {
  let analises: { name: string; uri: string }[] = [];

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
