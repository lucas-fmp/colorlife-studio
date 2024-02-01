import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import Footer from '../../components/Footer';
import colors from '../../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { pickImageAndDetectFace } from '../../utils/imagePicker';
import { StackNavigation } from '../../routes/stack.routes';

export default function AnaliseSelecionarImagem() {
  const [image, setImage] = useState<null | string>(null);
  const [hasFace, setHasFace] = useState<null | boolean>(null);
  const [hasMultipleFaces, setHasMultipleFaces] = useState<null | boolean>(
    null
  );

  const { goBack } = useNavigation();
  const { navigate } = useNavigation<StackNavigation>();

  const handlePickImage = async () => {
    pickImageAndDetectFace(setImage, setHasFace, setHasMultipleFaces);
  };

  useEffect(() => {
    if (image) {
      navigate('AnaliseArquivoPronto', { uri: image });
    }
  }, [image]);

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

      <Text style={styles.analiseTitle}>ANÁLISE DIGITAL</Text>

      <View style={styles.analiseContentContainer}>
        <Text style={styles.analiseText}>
          Para fazer a análise da cliente, toque no botão selecionar imagem e
          selecione a imagem da cliente.
        </Text>

        <TouchableOpacity
          style={styles.analiseButton}
          onPress={handlePickImage}
        >
          <Text style={styles.analiseButtonText}>SELECIONAR IMAGEM</Text>
        </TouchableOpacity>

        {hasFace === false && (
          <Text style={[styles.analiseText, { color: 'red' }]}>
            Nenhum rosto encontrado! Por favor, escolha outra imagem.
          </Text>
        )}

        {hasMultipleFaces === true && (
          <Text style={[styles.analiseText, { color: 'red' }]}>
            Mais de um rosto encontrado! Por favor, escolha outra imagem.
          </Text>
        )}
      </View>

      <Footer />
    </View>
  );
}
