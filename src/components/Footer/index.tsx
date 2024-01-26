import { View, Text } from 'react-native';
import { styles } from './styles';
import fonts from '../../styles/fonts';

interface FooterProps {
  opacity?: number;
}

export default function Footer({ opacity = 1 }: FooterProps) {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContainerText}>
        <Text
          style={[styles.footerText, { fontFamily: fonts.f700bold, opacity }]}
        >
          COLORLIFE STUDIO
        </Text>
        <Text
          style={[
            styles.footerText,
            { fontFamily: fonts.f400regular, opacity },
          ]}
        >
          {' '}
          | TODOS OS DIREITOS RESERVADOS {new Date().getFullYear()}
        </Text>
      </View>
    </View>
  );
}
