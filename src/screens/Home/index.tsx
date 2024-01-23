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
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../routes/stack.routes';

export default function Home() {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.homeContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <View style={styles.homeLogoContainer}>
        <Image
          source={require('../../assets/full-logo.png')}
          style={styles.homeLogo}
          resizeMode="contain"
        />
      </View>

      <ScrollView style={styles.homeButtonsContainer}>
        <TouchableOpacity style={styles.homeButton} onPress={() => {}}>
          <Text style={styles.homeButtonText}>ANÁLISE DIGITAL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton} onPress={() => {}}>
          <Text style={styles.homeButtonText}>MELHORES CORES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigate('Cartelas')}
        >
          <Text style={styles.homeButtonText}>CARTELAS DE CORES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigate('Dossies')}
        >
          <Text style={styles.homeButtonText}>DOSSIÊS COMPLETOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton} onPress={() => {}}>
          <Text style={styles.homeButtonText}>SOBRE</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}
