import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { styles } from "./styles";
import Footer from "../../components/Footer";
import colors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../routes/stack.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AnaliseSelecao() {
  const { goBack } = useNavigation();
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.analiseContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <TouchableOpacity style={styles.analiseBackIcon} onPress={() => goBack()}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.analiseLogoContainer}>
        <Image
          source={require("../../assets/full-logo.png")}
          style={styles.analiseLogo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.analiseTitle}>ANÁLISE DIGITAL</Text>

      <View style={styles.analiseContentContainer}>
        <Text style={styles.analiseText}>
          Você pode gerar uma nova análise ou acessar outras análises já feitas
          no Histórico de Análises.
        </Text>

        <TouchableOpacity
          style={styles.analiseButton}
          onPress={() => {
            navigate("AnaliseSelecionarImagem");
          }}
        >
          <Text style={styles.analiseButtonText}>NOVA ANÁLISE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.analiseButton}
          onPress={() => {
            navigate("AnaliseHistorico");
          }}
        >
          <Text style={styles.analiseButtonText}>HISTÓRICO DE ANÁLISES</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
}
