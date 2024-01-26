import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import Footer from '../../components/Footer';
import colors from '../../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, StackNavigation } from '../../routes/stack.routes';

type Props = {
  route: RouteProp<RootStackParamList, 'AnaliseArquivoPronto'>;
};

export default function AnaliseArquivoPronto({ route }: Props) {
  const { uri } = route.params;

  const { goBack } = useNavigation();
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.analiseContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <TouchableOpacity style={styles.analiseBackIcon} onPress={() => goBack()}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.analiseLogoContainer}>
        <Image
          source={require('../../assets/full-logo.png')}
          style={styles.analiseLogo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.analiseTitle}>Seu arquivo ficou pronto!</Text>

      <View style={styles.analiseContentContainer}>
        <Text style={styles.analiseText}>
          Salve seu arquivo PDF em um local seguro. Não será possível acessar
          histórico de análises criadas no aplicativo, portanto, armazene seus
          PDF’s
        </Text>

        <TouchableOpacity
          style={styles.analiseButton}
          onPress={() => navigate('AnaliseVisualizar', { uri })}
        >
          <Text style={styles.analiseButtonText}>
            VISUALIZAR PELO APLICATIVO
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.analiseButton}>
          <Text style={styles.analiseButtonText}>DOWNLOAD PDF</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
}
