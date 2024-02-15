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
import { deleteAnaliseByUri, getAnalises } from "../../utils/manipulateImg";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

type Analise = {
  name: string;
  uri: string;
};

export default function Historico() {
  const { navigate } = useNavigation<StackNavigation>();

  const [analises, setAnalises] = useState<Analise[] | undefined>();

  const itemHistorico = ({ item }: { item: Analise }) => {
    const { name, uri } = item;

    const handleRightButtonPress = async (item: Analise) => {
      await deleteAnaliseByUri(item.uri);

      getAnalises()
        .then((storageAnalises) => {
          setAnalises(storageAnalises);
        })
        .catch((error) => {
          console.error("Erro ao obter análises:", error);
        });
    };

    const rightButton = () => (
      <TouchableOpacity
        onPress={() => handleRightButtonPress(item)}
        style={styles.deleteIcon}
      >
        <FontAwesome name="trash-o" size={36} color={colors.white} />
      </TouchableOpacity>
    );

    return (
      <GestureHandlerRootView style={styles.swipeableContainer}>
        <Swipeable renderRightActions={rightButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("ArquivoPronto", { uri: uri, name: name })}
          >
            <Text style={styles.textButton}>{name}</Text>
            <Image source={{ uri: uri }} style={styles.imageButton} />
          </TouchableOpacity>
        </Swipeable>
      </GestureHandlerRootView>
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

      <View style={styles.scrollView}>
        <Text style={styles.title}>HISTÓRICO DE ANÁLISES</Text>

        <View style={styles.contentContainer}>
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
