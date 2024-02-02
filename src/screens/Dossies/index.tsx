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
import urlsDossies from '../../utils/urlsDossies';

export default function Dossies() {
  const { goBack } = useNavigation();

  return (
    <View style={styles.dossiesContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <TouchableOpacity style={styles.dossiesBackIcon} onPress={() => goBack()}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.dossiesLogoContainer}>
        <Image
          source={require('../../assets/full-logo.png')}
          style={styles.dossiesLogo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.dossiesTitle}>DOSSIÊS COMPLETOS</Text>

      <ScrollView style={styles.dossiesButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.invernoBrilhante },
          ]}
          onPress={() => Linking.openURL(urlsDossies.invernoBrilhante)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>INVERNO</Text>
            <Text style={styles.dossiesButtonSecondaryText}>BRILHANTE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
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
            styles.dossiesButton,
            { backgroundColor: colors.invernoEscuro },
          ]}
          onPress={() => Linking.openURL(urlsDossies.invernoEscuro)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>INVERNO</Text>
            <Text style={styles.dossiesButtonSecondaryText}>ESCURO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
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
            styles.dossiesButton,
            { backgroundColor: colors.invernoFrio },
          ]}
          onPress={() => Linking.openURL(urlsDossies.invernoFrio)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>INVERNO</Text>
            <Text style={styles.dossiesButtonSecondaryText}>FRIO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
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
            styles.dossiesButton,
            { backgroundColor: colors.outonoEscuro },
          ]}
          onPress={() => Linking.openURL(urlsDossies.outonoEscuro)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>OUTONO</Text>
            <Text style={styles.dossiesButtonSecondaryText}>ESCURO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
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
            styles.dossiesButton,
            { backgroundColor: colors.outonoQuente },
          ]}
          onPress={() => Linking.openURL(urlsDossies.outonoQuente)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>OUTONO</Text>
            <Text style={styles.dossiesButtonSecondaryText}>QUENTE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
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
            styles.dossiesButton,
            { backgroundColor: colors.outonoSuave },
          ]}
          onPress={() => Linking.openURL(urlsDossies.outonoSuave)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>OUTONO</Text>
            <Text style={styles.dossiesButtonSecondaryText}>SUAVE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
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
            styles.dossiesButton,
            { backgroundColor: colors.primaveraBrilhante },
          ]}
          onPress={() => Linking.openURL(urlsDossies.primaveraBrilhante)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>PRIMAVERA</Text>
            <Text style={styles.dossiesButtonSecondaryText}>BRILHANTE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
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
            styles.dossiesButton,
            { backgroundColor: colors.primaveraClara },
          ]}
          onPress={() => Linking.openURL(urlsDossies.primaveraClara)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>PRIMAVERA</Text>
            <Text style={styles.dossiesButtonSecondaryText}>CLARA</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
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
            styles.dossiesButton,
            { backgroundColor: colors.primaveraQuente },
          ]}
          onPress={() => Linking.openURL(urlsDossies.primaveraQuente)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>PRIMAVERA</Text>
            <Text style={styles.dossiesButtonSecondaryText}>QUENTE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
                {
                  tintColor: colors.primaveraQuenteSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dossiesButton, { backgroundColor: colors.veraoClaro }]}
          onPress={() => Linking.openURL(urlsDossies.veraoClaro)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>VERÃO</Text>
            <Text style={styles.dossiesButtonSecondaryText}>CLARO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
                {
                  tintColor: colors.veraoClaroSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dossiesButton, { backgroundColor: colors.veraoFrio }]}
          onPress={() => Linking.openURL(urlsDossies.veraoFrio)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>VERÃO</Text>
            <Text style={styles.dossiesButtonSecondaryText}>FRIO</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
                {
                  tintColor: colors.veraoFrioSecundaria,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dossiesButton, { backgroundColor: colors.veraoSuave }]}
          onPress={() => Linking.openURL(urlsDossies.veraoSuave)}
        >
          <View>
            <Text style={styles.dossiesButtonPrimaryText}>VERÃO</Text>
            <Text style={styles.dossiesButtonSecondaryText}>SUAVE</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logo-botao.svg')}
              style={[
                styles.dossiesButtonImage,
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
