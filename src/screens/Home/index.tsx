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
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as FaceDetector from 'expo-face-detector';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

interface FaceBounds {
  origin: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
}

export default function Home() {
  const { navigate } = useNavigation<StackNavigation>();

  const [image, setImage] = useState<null | string>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      detectFace(result.assets[0].uri);
    }
  };

  const detectFace = async (uri: string) => {
    const options = { mode: FaceDetector.FaceDetectorMode.fast };
    const { faces } = await FaceDetector.detectFacesAsync(uri, options);

    if (faces.length > 0) {
      const { bounds } = faces[0];
      cropImage(uri, bounds);
    } else {
      console.log('Nenhum rosto detectado.');
    }
  };

  const cropImage = async (uri: string, bounds: FaceBounds) => {
    const {
      origin: { x, y },
      size: { width, height },
    } = bounds;

    const croppedImage = await manipulateAsync(
      uri,
      [{ crop: { originX: x, originY: y, width, height } }],
      { compress: 1, format: SaveFormat.PNG }
    );

    setImage(croppedImage.uri);
  };

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
        <TouchableOpacity style={styles.homeButton} onPress={pickImage}>
          <Text style={styles.homeButtonText}>ANÁLISE DIGITAL</Text>
        </TouchableOpacity>
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 130,
              height: 200,
              borderRadius: 100,
            }}
          />
        )}
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
