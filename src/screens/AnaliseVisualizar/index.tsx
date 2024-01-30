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
import colors from '../../styles/colors';
import PagerView from 'react-native-pager-view';
import Footer from '../../components/Footer';
import ComparativeCard from '../../components/ComparativeCard';

type Props = {
  route: RouteProp<RootStackParamList, 'AnaliseVisualizar'>;
};

export default function AnaliseVisualizar({ route }: Props) {
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
    <View style={styles.analiseContainer}>
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
              style={styles.analiseBackIcon}
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

            <Text style={styles.swiperTitle}>SUBTOM DE PELE</Text>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="2">
            <TouchableOpacity
              style={styles.analiseBackIcon}
              onPress={() => goBack()}
            >
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

          <View style={styles.swiperPage} key="3">
            <TouchableOpacity
              style={styles.analiseBackIcon}
              onPress={() => goBack()}
            >
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
                  gap: 30,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="three" facePath={uri} />

              <ComparativeCard height={height} cardKey="four" facePath={uri} />

              <ComparativeCard height={height} cardKey="five" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="4">
            <TouchableOpacity
              style={styles.analiseBackIcon}
              onPress={() => goBack()}
            >
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
              <ComparativeCard height={height} cardKey="six" facePath={uri} />

              <ComparativeCard height={height} cardKey="seven" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="5">
            <TouchableOpacity
              style={styles.analiseBackIcon}
              onPress={() => goBack()}
            >
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
                  gap: 30,
                },
              ]}
            >
              <ComparativeCard height={height} cardKey="eight" facePath={uri} />

              <ComparativeCard height={height} cardKey="nine" facePath={uri} />

              <ComparativeCard height={height} cardKey="ten" facePath={uri} />
            </View>

            <Footer opacity={0.5} />
          </View>

          <View style={styles.swiperPage} key="6">
            <TouchableOpacity
              style={styles.analiseBackIcon}
              onPress={() => goBack()}
            >
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
              <ComparativeCard
                height={height}
                cardKey="eleven"
                facePath={uri}
              />

              <ComparativeCard
                height={height}
                cardKey="twelve"
                facePath={uri}
              />
            </View>

            <Footer opacity={0.5} />
          </View>
        </PagerView>
      </View>
    </View>
  );
}
