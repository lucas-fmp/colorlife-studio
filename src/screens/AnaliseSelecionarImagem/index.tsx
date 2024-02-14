import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import Footer from "../../components/Footer";
import colors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { pickImageAndDetectFace } from "../../utils/imagePicker";
import { StackNavigation } from "../../routes/stack.routes";
import { saveAnalises } from "../../utils/manipulateImg";

export default function AnaliseSelecionarImagem() {
  const [image, setImage] = useState<null | string>(null);
  const [hasFace, setHasFace] = useState<null | boolean>(null);
  const [hasMultipleFaces, setHasMultipleFaces] = useState<null | boolean>(
    null
  );
  const [clientName, setClientName] = useState("");

  const { goBack } = useNavigation();
  const { navigate } = useNavigation<StackNavigation>();

  const handlePickImage = async () => {
    pickImageAndDetectFace(setImage, setHasFace, setHasMultipleFaces);
  };

  const saveImgAndNavigate = async () => {
    if (image && clientName !== "") {
      const fileUri = await saveAnalises(image, clientName);

      navigate("AnaliseArquivoPronto", { uri: fileUri, name: clientName });
    }
  };

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

      <ScrollView contentContainerStyle={styles.analiseScrollView}>
        <View style={{ flexGrow: 1 }}>
          <Text style={styles.analiseTitle}>ANÁLISE DIGITAL</Text>

          <View style={styles.analiseContentContainer}>
            <Text style={styles.analiseText}>
              Para fazer a análise digital, digite o nome e selecione a imagem
              da cliente.
            </Text>

            <TextInput
              value={clientName}
              onChange={(e) => setClientName(e.nativeEvent.text)}
              style={styles.analiseTextInput}
              placeholder="Nome da Cliente"
              selectionColor={colors.black}
              autoCapitalize="words"
            />

            <TouchableOpacity
              style={styles.analiseButton}
              onPress={handlePickImage}
            >
              <Text style={styles.analiseButtonText}>SELECIONAR IMAGEM</Text>
            </TouchableOpacity>

            {hasFace === false && (
              <Text style={[styles.analiseText, { color: "red" }]}>
                Nenhum rosto encontrado! Por favor, escolha outra imagem.
              </Text>
            )}

            {hasMultipleFaces === true && (
              <Text style={[styles.analiseText, { color: "red" }]}>
                Mais de um rosto encontrado! Por favor, escolha outra imagem.
              </Text>
            )}

            {image && (
              <View
                style={{
                  flexGrow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={{ uri: image }} width={200} height={200} />
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.analiseButton,
            {
              backgroundColor:
                clientName === "" || !image ? colors.gray : colors.black,
              marginTop: 20,
              marginBottom: 40,
            },
          ]}
          onPress={() => {
            saveImgAndNavigate();
          }}
          disabled={clientName === "" || !image}
        >
          <Text style={styles.analiseButtonText}>GERAR ANÁLISE</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}
