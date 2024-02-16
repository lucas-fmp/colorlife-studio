import {
  View,
  StatusBar,
  Image,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList, StackNavigation } from "../../routes/stack.routes";
import { useEffect, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";
import PagerView from "react-native-pager-view";
import Footer from "../../components/Footer";
import ComparativeCard from "../../components/ComparativeCard";

type Props = {
  route: RouteProp<RootStackParamList, "AnaliseVisualizar">;
};

export default function AnaliseVisualizar({ route }: Props) {
  const { height, width } = useWindowDimensions();
  const { uri, name } = route.params;

  const [turnPhone, setTurnPhone] = useState(true);
  const { goBack } = useNavigation();

  const viewPagerRef = useRef<PagerView>(null);

  const changePage = (page: number) => {
    if (viewPagerRef.current) {
      viewPagerRef.current.setPage(page);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTurnPhone(false);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);

  if (turnPhone) {
    return (
      <View style={styles.turnPhoneContainer}>
        <StatusBar hidden={true} />
        <Text style={styles.turnPhoneText}>
          Vire o celular para a{" "}
          <Text style={{ fontFamily: fonts.f700bold }}>esquerda</Text> para
          melhor experiência.
        </Text>
        <View style={styles.turnPhoneImageContainer}>
          <Image
            source={require("../../assets/turn-phone.png")}
            style={styles.turnPhoneImage}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.analiseContainer}>
      <StatusBar hidden={true} />

      <View
        style={[styles.swiperContainer, { maxHeight: width, width: height }]}
      >
        <PagerView style={styles.viewPager} initialPage={0} ref={viewPagerRef}>
          <View
            style={[styles.swiperPage, { backgroundColor: colors.black }]}
            key="1"
          >
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="white"
              />
            </TouchableOpacity>

            <View style={styles.swiperHeader}>
              <Text style={[styles.swiperHeaderText, { color: colors.gray }]}>
                ANÁLISE DE COLORAÇÃO PESSOAL - DIGITAL
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("../../assets/logo/white-bold.png")}
                  style={{ height: 20, width: 20 }}
                />
                <Text
                  style={[styles.swiperHeaderText, { color: colors.white }]}
                >
                  COLORLIFE STUDIO
                </Text>
              </View>
            </View>

            <View style={styles.titleContainer}>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.white,
                    paddingRight: "15%",
                  },
                ]}
              >
                {name.toUpperCase()}
              </Text>
              <Text style={[styles.swiperHeaderText, { color: colors.white }]}>
                ESTUDO DE CASO
              </Text>
            </View>
          </View>

          <View
            style={[styles.swiperPage, { backgroundColor: colors.white }]}
            key="2"
          >
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <View style={styles.termosContainer}>
              <Text style={styles.scrollViewTitle}>ÍNDICE</Text>

              <ScrollView>
                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(3)}
                >
                  <Text style={styles.scrollViewText}>
                    1. CONTRASTE PESSOAL
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(8)}
                >
                  <Text style={styles.scrollViewText}>2. SUBTOM DE PELE</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(13)}
                >
                  <Text style={styles.scrollViewText}>
                    3. DIMENSÕES (TEMPERATURA, INTENSIDADE E PROFUNDIDADE)
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(20)}
                >
                  <Text style={styles.scrollViewText}>
                    4. CARTELAS COM A MESMA DIMENSÃO (SOBRENOME)
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(27)}
                >
                  <Text style={styles.scrollViewText}>
                    5. CARTELAS - COMPARATIVO ENTRE AS TRÊS CARTELAS DA MESMA
                    ESTAÇÃO
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(32)}
                >
                  <Text style={styles.scrollViewText}>6. PRETO E BRANCO</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(35)}
                >
                  <Text style={styles.scrollViewText}>7. METAIS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(38)}
                >
                  <Text style={styles.scrollViewText}>
                    8. O SEU TOM DE CADA COR
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(44)}
                >
                  <Text style={styles.scrollViewText}>
                    9. PAISAGENS - COMPARANDO A CONTINUIDADE DA BELEZA
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(49)}
                >
                  <Text style={styles.scrollViewText}>
                    10. ESTAMPAS - COMPARANDO A CONTINUIDADE DA BELEZA
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginBottom: 5 }}
                  onPress={() => changePage(57)}
                >
                  <Text style={styles.scrollViewText}>
                    11. ESTAMPAS DE CADA CARTELA
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>

          <View
            style={[styles.swiperPage, { backgroundColor: colors.white }]}
            key="3"
          >
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 75,
                  },
                ]}
              >
                CONTRASTE
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 75,
                  },
                ]}
              >
                PESSOAL
              </Text>
            </View>
          </View>

          <View
            style={[styles.swiperPage, { backgroundColor: colors.white }]}
            key="4"
          >
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  height: width,
                  width: height,
                },
              ]}
            >
              <ComparativeCard
                height={height}
                cardKey="contraste01"
                facePath={uri}
              />

              <ComparativeCard
                height={height}
                cardKey="contraste02"
                facePath={uri}
              />
            </View>
          </View>

          <View
            style={[styles.swiperPage, { backgroundColor: colors.white }]}
            key="5"
          >
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  height: width,
                  width: height,
                },
              ]}
            >
              <ComparativeCard
                height={height}
                cardKey="contraste03"
                facePath={uri}
              />

              <ComparativeCard
                height={height}
                cardKey="contraste04"
                facePath={uri}
              />
            </View>
          </View>

          <View style={styles.swiperPage} key="6">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  height: width,
                  width: height,
                },
              ]}
            >
              <ComparativeCard
                height={height}
                cardKey="contraste05"
                facePath={uri}
              />

              <ComparativeCard
                height={height}
                cardKey="contraste06"
                facePath={uri}
              />
            </View>
          </View>

          <View style={styles.swiperPage} key="7">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  height: width,
                  width: height,
                },
              ]}
            >
              <ComparativeCard
                height={height}
                cardKey="contraste03"
                facePath={uri}
              />

              <ComparativeCard
                height={height}
                cardKey="contraste05"
                facePath={uri}
              />

              <ComparativeCard
                height={height}
                cardKey="contraste06"
                facePath={uri}
              />
            </View>
          </View>

          <View style={styles.swiperPage} key="8">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  height: width,
                  width: height,
                },
              ]}
            >
              <ComparativeCard
                height={height}
                cardKey="contraste04"
                facePath={uri}
              />

              <ComparativeCard
                height={height}
                cardKey="contraste05"
                facePath={uri}
              />

              <ComparativeCard
                height={height}
                cardKey="contraste06"
                facePath={uri}
              />
            </View>
          </View>

          <View style={styles.swiperPage} key="9">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 75,
                  },
                ]}
              >
                SUBTOM
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 75,
                  },
                ]}
              >
                DE PELE
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="10">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="11">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="12">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="13">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 95,
                    marginBottom: -10,
                  },
                ]}
              >
                DIMENSÕES
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 20,
                    lineHeight: 25,
                    letterSpacing: 0,
                  },
                ]}
              >
                TEMPERATURA, INTENSIDADE E PROFUNDIDADE
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="14">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="15">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="16">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="17">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="18">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="19">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="20">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 95,
                    marginBottom: -10,
                  },
                ]}
              >
                CARTELAS
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 20,
                    lineHeight: 25,
                    letterSpacing: 0,
                  },
                ]}
              >
                COM A MESMA DIMENSÃO (SOBRENOME)
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="21">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="22">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="23">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="24">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="25">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="26">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="27">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 95,
                    marginBottom: -10,
                  },
                ]}
              >
                CARTELAS
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 20,
                    lineHeight: 25,
                    letterSpacing: 0,
                  },
                ]}
              >
                COMPARATIVO ENTRE AS TRÊS CARTELAS DA MESMA ESTAÇÃO
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="28">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="29">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="30">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="31">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="32">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 75,
                  },
                ]}
              >
                PRETO E
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 75,
                  },
                ]}
              >
                BRANCO
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="33">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="34">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="35">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 75,
                  },
                ]}
              >
                METAIS
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="36">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="37">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="38">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 75,
                  },
                ]}
              >
                O SEU TOM DE
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 75,
                  },
                ]}
              >
                CADA COR
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="39">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="40">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="41">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="42">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="43">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="44">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 95,
                    marginBottom: -10,
                  },
                ]}
              >
                PAISAGENS
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 20,
                    lineHeight: 25,
                    letterSpacing: 0,
                  },
                ]}
              >
                COMPARANDO A CONTINUIDADE DA BELEZA
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="45">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="46">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="47">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="48">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="49">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 95,
                    marginBottom: -10,
                  },
                ]}
              >
                ESTAMPAS
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 20,
                    lineHeight: 25,
                    letterSpacing: 0,
                  },
                ]}
              >
                COMPARANDO A CONTINUIDADE DA BELEZA
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="50">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="51">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="52">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="53">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="54">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="55">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="56">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="57">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.analiseIndexIcon}
              onPress={() => changePage(2)}
            >
              <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <View
              style={{
                position: "absolute",
                width: "80%",
                bottom: 60,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 70,
                    lineHeight: 95,
                    marginBottom: -10,
                  },
                ]}
              >
                ESTAMPAS
              </Text>
              <Text
                style={[
                  styles.swiperTitle,
                  {
                    color: colors.black,
                    fontSize: 20,
                    lineHeight: 25,
                    letterSpacing: 0,
                  },
                ]}
              >
                DE CADA CARTELA
              </Text>
            </View>
          </View>

          <View style={styles.swiperPage} key="58">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="59">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="60">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="61">
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={[styles.swiperHeader, { letterSpacing: 4 }]}>
              SUBTOM DE PELE
            </Text>

            <View
              style={[
                styles.comparativeCardsContainer,
                {
                  maxHeight: width - 100,
                  height: width - 100,
                  width: height,
                  gap: 60,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="one" facePath={uri} />

              <ComparativeCard height={height} cardKey="two" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View
            style={[styles.swiperPage, { backgroundColor: colors.black }]}
            key="62"
          >
            <TouchableOpacity style={styles.analiseBackIcon} onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </PagerView>
      </View>
    </View>
  );
}
