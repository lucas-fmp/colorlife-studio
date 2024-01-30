import {
  View,
  StatusBar,
  Image,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack.routes';
import { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import PagerView from 'react-native-pager-view';
import Footer from '../../components/Footer';
import MelhoresCoresCards from '../../components/MelhoresCoresCards';
import {
  veraoClaro,
  veraoFrio,
  veraoSuave,
  invernoFrio,
  invernoBrilhante,
  invernoEscuro,
  primaveraClara,
  primaveraQuente,
  primaveraBrilhante,
  outonoSuave,
  outonoQuente,
  outonoEscuro,
} from '../../utils/melhoresCoresHex';

type Props = {
  route: RouteProp<RootStackParamList, 'MelhoresCoresVisualizar'>;
};

export default function MelhoresCoresVisualizar({ route }: Props) {
  const { height, width } = useWindowDimensions();
  const { uri } = route.params;

  const [turnPhone, setTurnPhone] = useState(true);
  const { goBack } = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTurnPhone(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (turnPhone) {
    return (
      <View style={styles.turnPhoneContainer}>
        <StatusBar
          barStyle="light-content"
          translucent={false}
          backgroundColor={colors.black}
        />
        <Text style={styles.turnPhoneText}>
          Vire o celular para a{' '}
          <Text style={{ fontFamily: fonts.f700bold }}>esquerda</Text> para
          melhor experiência.
        </Text>
        <View style={styles.turnPhoneImageContainer}>
          <Image
            source={require('../../assets/turn-phone.png')}
            style={styles.turnPhoneImage}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.melhoresCoresContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <View
        style={[styles.swiperContainer, { maxHeight: width, width: height }]}
      >
        <PagerView style={styles.viewPager} initialPage={0}>
          <View style={styles.swiperPage} key="1">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={styles.swiperHeader}>
              ANÁLISE DE COLORAÇÃO PESSOAL - DIGITAL
            </Text>

            <Text style={styles.swiperTitle}>MELHORES E PIORES CORES</Text>

            <Text style={styles.swiperSubTitle}>DE CADA CARTELA</Text>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="2">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <View style={styles.termosContainer}>
              <Text style={styles.termosTitle}>TERMOS DE USO</Text>

              <ScrollView>
                <Text style={styles.termosText}>
                  • Este material é autoral e de propriedade intelectual de
                  ColorLife Studio.
                </Text>
                <Text style={styles.termosText}>
                  • Seu uso é exclusivo para consultoras de imagem que
                  adquiriram o material de forma direta e legal por meio da
                  compra online via Hotmart.
                </Text>
                <Text style={styles.termosText}>
                  • É proibida a reprodução total ou parcial do conteúdo e/ou
                  compartilhamento do mesmo;
                </Text>
                <Text style={styles.termosText}>
                  • A consultora que adquirir este material está autorizada a
                  utilizá-lo para realizar a análise de coloração pessoal de
                  suas próprias clientes;
                </Text>
                <Text style={styles.termosText}>
                  • É proibida a venda do todo ou de parte do material, bem como
                  o compartilhamento com outras consultoras que não adquiriam o
                  mesmo.
                </Text>
                <Text style={styles.termosText}>
                  • A Cópia ou comercialização ilegal deste conteúdo caracteriza
                  crime, sob pena do artigo 184.
                </Text>
                <Text style={styles.termosText}>
                  • “Art. 184. Violar os direitos de autor e os que lhe são
                  conexos: Pena - Detenção, de 3 Meses a 1 Ano, ou Multa.”
                </Text>
                <Text style={[styles.termosText, { paddingBottom: 20 }]}>
                  • Direitos de Autor. TODOS OS DIREITOS RESERVADOS.
                </Text>

                <Text style={styles.termosText}>
                  “O plágio pode ser definido como a cópia, dissimulada ou
                  disfarçada, do todo ou de parte da forma pela qual um
                  determinado criador exprimiu suas ideias, ou seja, da obra
                  alheia, com a finalidade de atribuir-se a autoria da criação
                  intelectual e, a partir daí, usufruir o plagiador das
                  vantagens da autoria de uma obra”. (Plágio e Outros estudos em
                  Direito de Autor. Rio de Janeiro: Lumen Juris. Pág. 21).
                </Text>
              </ScrollView>
            </View>
          </View>

          <View style={styles.swiperPage} key="3">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={styles.swiperHeader}>
              ANÁLISE DE COLORAÇÃO PESSOAL - DIGITAL
            </Text>

            <Text style={styles.swiperTitle}>VERÕES</Text>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="4">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={veraoClaro} />
          </View>

          <View style={styles.swiperPage} key="5">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={veraoFrio} />
          </View>

          <View style={styles.swiperPage} key="6">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={veraoSuave} />
          </View>

          <View style={styles.swiperPage} key="7">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={styles.swiperHeader}>
              ANÁLISE DE COLORAÇÃO PESSOAL - DIGITAL
            </Text>

            <Text style={styles.swiperTitle}>INVERNOS</Text>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="8">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={invernoFrio} />
          </View>

          <View style={styles.swiperPage} key="9">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={invernoBrilhante} />
          </View>

          <View style={styles.swiperPage} key="10">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={invernoEscuro} />
          </View>

          <View style={styles.swiperPage} key="11">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={styles.swiperHeader}>
              ANÁLISE DE COLORAÇÃO PESSOAL - DIGITAL
            </Text>

            <Text style={styles.swiperTitle}>PRIMAVERAS</Text>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="12">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={primaveraClara} />
          </View>

          <View style={styles.swiperPage} key="13">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={primaveraQuente} />
          </View>

          <View style={styles.swiperPage} key="14">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={primaveraBrilhante} />
          </View>

          <View style={styles.swiperPage} key="15">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={styles.swiperHeader}>
              ANÁLISE DE COLORAÇÃO PESSOAL - DIGITAL
            </Text>

            <Text style={styles.swiperTitle}>OUTONO</Text>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="16">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={outonoSuave} />
          </View>

          <View style={styles.swiperPage} key="17">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={outonoQuente} />
          </View>

          <View style={styles.swiperPage} key="18">
            <TouchableOpacity
              style={styles.melhoresCoresBackIcon}
              onPress={() => goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <MelhoresCoresCards facePath={uri} cartela={outonoEscuro} />
          </View>
        </PagerView>
      </View>
    </View>
  );
}
