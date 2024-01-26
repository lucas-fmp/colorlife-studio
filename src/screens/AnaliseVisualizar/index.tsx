import { View, StatusBar, Image, Text } from 'react-native';
import { styles } from './styles';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack.routes';
import { useEffect, useState } from 'react';
import fonts from '../../styles/fonts';

type Props = {
  route: RouteProp<RootStackParamList, 'AnaliseVisualizar'>;
};

export default function AnaliseVisualizar({ route }: Props) {
  const { uri } = route.params;
  const [turnPhone, setTurnPhone] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTurnPhone(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (turnPhone) {
    return (
      <View style={styles.turnPhoneContainer}>
        <StatusBar hidden />
        <Text style={styles.turnPhoneText}>
          Vire o celular para a{' '}
          <Text style={{ fontFamily: fonts.f700bold }}>esquerda</Text> para
          melhor experiência.
        </Text>
        <View style={styles.turnPhoneImageContainer}>
          <Image
            source={require('../../assets/turn-phone.png')}
            style={styles.turnPhoneImage}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.analiseContainer}>
      <StatusBar hidden />
    </View>
  );
}
