import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import Footer from '../../components/Footer';
import colors from '../../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { pickImageAndDetectFace } from '../../utils/imagePicker';
import { StackNavigation } from '../../routes/stack.routes';

export default function MelhoresCoresSelecionarImagem() {
  const [image, setImage] = useState<null | string>(null);
  const [hasFace, setHasFace] = useState<null | boolean>(null);

  const { goBack } = useNavigation();
  const { navigate } = useNavigation<StackNavigation>();

  const handlePickImage = async () => {
    pickImageAndDetectFace(setImage, setHasFace);
  };

  useEffect(() => {
    if (image) {
      navigate('MelhoresCoresArquivoPronto', { uri: image });
    }
  }, [image]);

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

      <Text style={styles.melhoresCoresTitle}>
        MELHORES E PIORES CORES DE CADA CARTELA
      </Text>

      <View style={styles.melhoresCoresContentContainer}>
        <Text style={styles.melhoresCoresText}>
          Toque no botão selecionar imagem e selecione a imagem da cliente.
        </Text>

        <TouchableOpacity
          style={styles.melhoresCoresButton}
          onPress={handlePickImage}
        >
          <Text style={styles.melhoresCoresButtonText}>SELECIONAR IMAGEM</Text>
        </TouchableOpacity>

        {hasFace === false && (
          <Text style={[styles.melhoresCoresText, { color: 'red' }]}>
            Nenhum rosto encontrado! Por favor, tente novamente.
          </Text>
        )}
      </View>

      <Footer />
    </View>
  );
}
