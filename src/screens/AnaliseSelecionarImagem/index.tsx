import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import Footer from '../../components/Footer';
import colors from '../../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { pickImageAndDetectFace } from '../../utils/imagePicker';
// import Svg, { Image as SvgImage, ClipPath, Ellipse } from 'react-native-svg';
import { StackNavigation } from '../../routes/stack.routes';

export default function AnaliseSelecionarImagem() {
  const [image, setImage] = useState<null | string>(null);
  const [hasFace, setHasFace] = useState<null | boolean>(null);

  const { goBack } = useNavigation();
  const { navigate } = useNavigation<StackNavigation>();

  const handlePickImage = async () => {
    pickImageAndDetectFace(setImage, setHasFace);
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
            Nenhum rosto encontrado! Por favor, tente novamente.
          </Text>
        )}
      </View>

      {/* {image && (
        <Svg width="200" height="200" rotation={90}>
          <ClipPath id="clip">
            <Ellipse cx="100" cy="100" rx="75" ry="100" />
          </ClipPath>
          <SvgImage
            href={{ uri: image }}
            width="200"
            height="200"
            clipPath="url(#clip)"
          />
        </Svg>
      )} */}

      <Footer />
    </View>
  );
}
