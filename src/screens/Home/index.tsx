import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import Footer from "../../components/Footer";
import colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../routes/stack.routes";

export default function Home() {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo/full-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ScrollView style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("SelecionarImagem")}
        >
          <Text style={styles.buttonText}>NOVA ANÁLISE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Historico")}
        >
          <Text style={styles.buttonText}>HISTÓRICO DE ANÁLISES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Cartelas")}
        >
          <Text style={styles.buttonText}>CARTELAS DE CORES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Dossies")}
        >
          <Text style={styles.buttonText}>DOSSIÊS COMPLETOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>SOBRE</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}
