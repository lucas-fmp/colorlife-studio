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
          <Text style={styles.dossiesButtonText}>INVERNO BRILHANTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.invernoEscuro },
          ]}
          onPress={() => Linking.openURL(urlsDossies.invernoEscuro)}
        >
          <Text style={styles.dossiesButtonText}>INVERNO ESCURO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.invernoFrio },
          ]}
          onPress={() => Linking.openURL(urlsDossies.invernoFrio)}
        >
          <Text style={styles.dossiesButtonText}>INVERNO FRIO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.outonoEscuro },
          ]}
          onPress={() => Linking.openURL(urlsDossies.outonoEscuro)}
        >
          <Text style={styles.dossiesButtonText}>OUTONO ESCURO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.outonoQuente },
          ]}
          onPress={() => Linking.openURL(urlsDossies.outonoQuente)}
        >
          <Text style={styles.dossiesButtonText}>OUTONO QUENTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.outonoSuave },
          ]}
          onPress={() => Linking.openURL(urlsDossies.outonoSuave)}
        >
          <Text style={styles.dossiesButtonText}>OUTONO SUAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.primaveraBrilhante },
          ]}
          onPress={() => Linking.openURL(urlsDossies.primaveraBrilhante)}
        >
          <Text style={styles.dossiesButtonText}>PRIMAVERA BRILHANTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.primaveraClara },
          ]}
          onPress={() => Linking.openURL(urlsDossies.primaveraClara)}
        >
          <Text style={styles.dossiesButtonText}>PRIMAVERA CLARA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.primaveraQuente },
          ]}
          onPress={() => Linking.openURL(urlsDossies.primaveraQuente)}
        >
          <Text style={styles.dossiesButtonText}>PRIMAVERA QUENTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dossiesButton, { backgroundColor: colors.veraoClaro }]}
          onPress={() => Linking.openURL(urlsDossies.veraoClaro)}
        >
          <Text style={styles.dossiesButtonText}>VERÃO CLARO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dossiesButton, { backgroundColor: colors.veraoFrio }]}
          onPress={() => Linking.openURL(urlsDossies.veraoFrio)}
        >
          <Text style={styles.dossiesButtonText}>VERÃO FRIO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dossiesButton, { backgroundColor: colors.veraoSuave }]}
          onPress={() => Linking.openURL(urlsDossies.veraoSuave)}
        >
          <Text style={styles.dossiesButtonText}>VERÃO SUAVE</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}
