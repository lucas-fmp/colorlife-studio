import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { styles } from "./styles";
import Footer from "../../components/Footer";
import colors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList, StackNavigation } from "../../routes/stack.routes";
import { getAnalises } from "../../utils/manipulateImg";

type Props = {
  route: RouteProp<RootStackParamList, "AnaliseArquivoPronto">;
};

export default function AnaliseArquivoPronto({ route }: Props) {
  const { uri } = route.params;

  const { navigate } = useNavigation<StackNavigation>();

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

      <Text style={styles.analiseTitle}>Seu arquivo ficou pronto!</Text>

      <View style={styles.analiseContentContainer}>
        <Text style={styles.analiseText}>
          Você poderá também acessar esta e outras análises já feitas no
          Histórico de Análises.
        </Text>

        <TouchableOpacity
          style={styles.analiseButton}
          onPress={() => navigate("AnaliseVisualizar", { uri })}
        >
          <Text style={styles.analiseButtonText}>VISUALIZAR ANÁLISE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.analiseButton}
          onPress={() => navigate("AnaliseHistorico")}
        >
          <Text style={styles.analiseButtonText}>HISTÓRICO DE ANÁLISES</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
}
