import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Linking,
} from 'react-native';
import { styles } from './styles';
import Footer from '../../components/Footer';
import colors from '../../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import urlsCartelas from '../../utils/urlsCartelas';

export default function Cartelas() {
  const { goBack } = useNavigation();

  return (
    <View style={styles.cartelasContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <TouchableOpacity
        style={styles.cartelasBackIcon}
        onPress={() => goBack()}
      >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.cartelasLogoContainer}>
        <Image
          source={require('../../assets/full-logo.png')}
          style={styles.cartelasLogo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.cartelasTitle}>CARTELA DE CORES</Text>

      <ScrollView style={styles.cartelasButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.invernoBrilhante },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.invernoBrilhante)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>INVERNO</Text>
            <Text style={styles.cartelasButtonSecondaryText}>BRILHANTE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.invernoBrilhanteSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.invernoEscuro },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.invernoEscuro)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>INVERNO</Text>
            <Text style={styles.cartelasButtonSecondaryText}>ESCURO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.invernoEscuroSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.invernoFrio },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.invernoFrio)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>INVERNO</Text>
            <Text style={styles.cartelasButtonSecondaryText}>FRIO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.invernoFrioSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.outonoEscuro },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.outonoEscuro)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>OUTONO</Text>
            <Text style={styles.cartelasButtonSecondaryText}>ESCURO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.outonoEscuroSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.outonoQuente },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.outonoQuente)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>OUTONO</Text>
            <Text style={styles.cartelasButtonSecondaryText}>QUENTE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.outonoQuenteSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.outonoSuave },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.outonoSuave)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>OUTONO</Text>
            <Text style={styles.cartelasButtonSecondaryText}>SUAVE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.outonoSuaveSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.primaveraBrilhante },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.primaveraBrilhante)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>PRIMAVERA</Text>
            <Text style={styles.cartelasButtonSecondaryText}>BRILHANTE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.primaveraBrilhanteSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.primaveraClara },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.primaveraClara)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>PRIMAVERA</Text>
            <Text style={styles.cartelasButtonSecondaryText}>CLARA</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.primaveraClaraSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.primaveraQuente },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.primaveraQuente)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>PRIMAVERA</Text>
            <Text style={styles.cartelasButtonSecondaryText}>QUENTE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.primaveraQuenteSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.veraoClaro },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.veraoClaro)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>VERÃO</Text>
            <Text style={styles.cartelasButtonSecondaryText}>CLARO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.veraoClaroSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.cartelasButton, { backgroundColor: colors.veraoFrio }]}
          onPress={() => Linking.openURL(urlsCartelas.veraoFrio)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>VERÃO</Text>
            <Text style={styles.cartelasButtonSecondaryText}>FRIO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.veraoFrioSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.veraoSuave },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.veraoSuave)}
        >
          <View>
            <Text style={styles.cartelasButtonPrimaryText}>VERÃO</Text>
            <Text style={styles.cartelasButtonSecondaryText}>SUAVE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.cartelasButtonImage,
                {
                  tintColor: colors.veraoSuaveSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}
