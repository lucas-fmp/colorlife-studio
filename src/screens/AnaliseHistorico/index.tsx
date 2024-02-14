import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import Footer from "../../components/Footer";
import colors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../routes/stack.routes";
import { useEffect, useState } from "react";
import { getAnalises } from "../../utils/manipulateImg";
import fonts from "../../styles/fonts";

type Analise = {
  name: string;
  uri: string;
};

export default function AnaliseHistorico() {
  const { goBack } = useNavigation();
  const { navigate } = useNavigation<StackNavigation>();

  const [analises, setAnalises] = useState<Analise[] | undefined>();

  const itemHistorico = ({ item }: { item: Analise }) => {
    const { name, uri } = item;
    return (
      <TouchableOpacity
        style={{
          alignSelf: "center",
          width: "85%",
          alignItems: "center",
          paddingLeft: 20,
          marginBottom: 10,
          height: 80,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "black",
        }}
        onPress={() => navigate("AnaliseVisualizar", { uri: uri, name: name })}
      >
        <Text
          style={{
            color: "white",
            maxWidth: "70%",
            fontFamily: fonts.f400regular,
            paddingTop: 5,
          }}
        >
          {name}
        </Text>
        <Image source={{ uri: uri }} style={{ width: 80, height: 80 }} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getAnalises()
      .then((storageAnalises) => {
        setAnalises(storageAnalises);
      })
      .catch((error) => {
        console.error("Erro ao obter análises:", error);
      });
  }, []);

  return (
    <View style={styles.analiseContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <TouchableOpacity
        style={styles.analiseBackIcon}
        onPress={() => navigate("AnaliseSelecao")}
      >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.analiseLogoContainer}>
        <Image
          source={require("../../assets/full-logo.png")}
          style={styles.analiseLogo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.analiseScrollView}>
        <Text style={styles.analiseTitle}>HISTÓRICO DE ANÁLISES</Text>

        <View style={styles.analiseContentContainer}>
          <FlatList
            data={analises?.reverse()}
            renderItem={itemHistorico}
            style={{ width: "100%" }}
          />
        </View>
      </View>

      <Footer />
    </View>
  );
}
