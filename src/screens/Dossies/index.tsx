import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import Footer from '../../components/Footer';
import colors from '../../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>INVERNO BRILHANTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.invernoEscuro },
          ]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>INVERNO ESCURO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.invernoFrio },
          ]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>INVERNO FRIO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.outonoEscuro },
          ]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>OUTONO ESCURO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.outonoQuente },
          ]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>OUTONO QUENTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.outonoSuave },
          ]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>OUTONO SUAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.primaveraBrilhante },
          ]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>PRIMAVERA BRILHANTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.primaveraClara },
          ]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>PRIMAVERA CLARA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dossiesButton,
            { backgroundColor: colors.primaveraQuente },
          ]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>PRIMAVERA QUENTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dossiesButton, { backgroundColor: colors.veraoClaro }]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>VERÃO CLARO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dossiesButton, { backgroundColor: colors.veraoFrio }]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>VERÃO FRIO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dossiesButton, { backgroundColor: colors.veraoSuave }]}
          onPress={() => {}}
        >
          <Text style={styles.dossiesButtonText}>VERÃO SUAVE</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}
