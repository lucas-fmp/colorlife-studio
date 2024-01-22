import { View, Text } from 'react-native';
import { styles } from './styles';
import fonts from '../../styles/fonts';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContainerText}>
        <Text style={[styles.footerText, { fontFamily: fonts.f700bold }]}>
          COLORLIFE STUDIO
        </Text>
        <Text style={[styles.footerText, { fontFamily: fonts.f400regular }]}>
          {' '}
          | TODOS OS DIREITOS RESERVADOS {new Date().getFullYear()}
        </Text>
      </View>
    </View>
  );
}
