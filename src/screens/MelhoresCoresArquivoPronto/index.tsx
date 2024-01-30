import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import Footer from '../../components/Footer';
import colors from '../../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, StackNavigation } from '../../routes/stack.routes';

type Props = {
  route: RouteProp<RootStackParamList, 'MelhoresCoresArquivoPronto'>;
};

export default function MelhoresCoresArquivoPronto({ route }: Props) {
  const { uri } = route.params;

  const { goBack } = useNavigation();
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.melhoresCoresContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={colors.white}
      />

      <TouchableOpacity
        style={styles.melhoresCoresBackIcon}
        onPress={() => goBack()}
      >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.melhoresCoresLogoContainer}>
        <Image
          source={require('../../assets/full-logo.png')}
          style={styles.melhoresCoresLogo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.melhoresCoresTitle}>Seu arquivo ficou pronto!</Text>

      <View style={styles.melhoresCoresContentContainer}>
        <Text style={styles.melhoresCoresText}>
          Salve seu arquivo PDF em um local seguro. Não será possível acessar
          histórico de análises criadas no aplicativo, portanto, armazene seus
          PDF’s
        </Text>

        <TouchableOpacity
          style={styles.melhoresCoresButton}
          onPress={() => navigate('MelhoresCoresVisualizar', { uri })}
        >
          <Text style={styles.melhoresCoresButtonText}>
            VISUALIZAR PELO APLICATIVO
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.melhoresCoresButton}>
          <Text style={styles.melhoresCoresButtonText}>DOWNLOAD PDF</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
}
