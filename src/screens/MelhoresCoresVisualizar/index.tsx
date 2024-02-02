import {
  View,
  StatusBar,
  Image,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack.routes';
import { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import fonts from '../../styles/fonts';
import PagerView from 'react-native-pager-view';
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
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);

  if (turnPhone) {
    return (
      <View style={styles.turnPhoneContainer}>
        <StatusBar hidden={true} />
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
      <StatusBar hidden={true} />

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

            <MelhoresCoresCards facePath={uri} cartela={veraoClaro} />
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

            <MelhoresCoresCards facePath={uri} cartela={veraoFrio} />
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

            <MelhoresCoresCards facePath={uri} cartela={veraoSuave} />
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

            <MelhoresCoresCards facePath={uri} cartela={invernoFrio} />
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

            <MelhoresCoresCards facePath={uri} cartela={invernoBrilhante} />
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

            <MelhoresCoresCards facePath={uri} cartela={invernoEscuro} />
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

            <MelhoresCoresCards facePath={uri} cartela={primaveraClara} />
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

            <MelhoresCoresCards facePath={uri} cartela={primaveraQuente} />
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

            <MelhoresCoresCards facePath={uri} cartela={primaveraBrilhante} />
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

            <MelhoresCoresCards facePath={uri} cartela={outonoSuave} />
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

            <MelhoresCoresCards facePath={uri} cartela={outonoQuente} />
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

            <MelhoresCoresCards facePath={uri} cartela={outonoEscuro} />
          </View>
        </PagerView>
      </View>
    </View>
  );
}
