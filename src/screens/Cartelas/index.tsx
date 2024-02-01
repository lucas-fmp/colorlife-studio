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
          <Text style={styles.cartelasButtonText}>INVERNO BRILHANTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.invernoEscuro },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.invernoEscuro)}
        >
          <Text style={styles.cartelasButtonText}>INVERNO ESCURO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.invernoFrio },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.invernoFrio)}
        >
          <Text style={styles.cartelasButtonText}>INVERNO FRIO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.outonoEscuro },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.outonoEscuro)}
        >
          <Text style={styles.cartelasButtonText}>OUTONO ESCURO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.outonoQuente },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.outonoQuente)}
        >
          <Text style={styles.cartelasButtonText}>OUTONO QUENTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.outonoSuave },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.outonoSuave)}
        >
          <Text style={styles.cartelasButtonText}>OUTONO SUAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.primaveraBrilhante },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.primaveraBrilhante)}
        >
          <Text style={styles.cartelasButtonText}>PRIMAVERA BRILHANTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.primaveraClara },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.primaveraClara)}
        >
          <Text style={styles.cartelasButtonText}>PRIMAVERA CLARA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.primaveraQuente },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.primaveraQuente)}
        >
          <Text style={styles.cartelasButtonText}>PRIMAVERA QUENTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.veraoClaro },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.veraoClaro)}
        >
          <Text style={styles.cartelasButtonText}>VERÃO CLARO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cartelasButton, { backgroundColor: colors.veraoFrio }]}
          onPress={() => Linking.openURL(urlsCartelas.veraoFrio)}
        >
          <Text style={styles.cartelasButtonText}>VERÃO FRIO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cartelasButton,
            { backgroundColor: colors.veraoSuave },
          ]}
          onPress={() => Linking.openURL(urlsCartelas.veraoSuave)}
        >
          <Text style={styles.cartelasButtonText}>VERÃO SUAVE</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}
