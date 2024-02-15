import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { styles } from "./styles";
import Footer from "../../components/Footer";
import colors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList, StackNavigation } from "../../routes/stack.routes";

type Props = {
  route: RouteProp<RootStackParamList, "ArquivoPronto">;
};

export default function AnaliseArquivoPronto({ route }: Props) {
  const { uri, name } = route.params;

  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigate("Home")}
      >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/full-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Arquivos de {name}</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          Toque nos botões abaixo para visualizar os arquivos.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("AnaliseVisualizar", { uri })}
        >
          <Text style={styles.buttonText}>ANÁLISE DIGITAL</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("MelhoresCoresVisualizar", { uri })}
        >
          <Text style={styles.buttonText}>MELHORES CORES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>FICHA DE DIAGNÓSTICO</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
}
