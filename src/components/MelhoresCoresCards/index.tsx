import { Text, View } from 'react-native';
import { styles } from './styles';
import Svg, { Image as SvgImage, ClipPath, Ellipse } from 'react-native-svg';
import {
  invernoBrilhante,
  invernoEscuro,
  invernoFrio,
  outonoEscuro,
  outonoQuente,
  outonoSuave,
  primaveraBrilhante,
  primaveraClara,
  primaveraQuente,
  veraoClaro,
  veraoFrio,
  veraoSuave,
} from '../../utils/melhoresCoresHex';
import colors from '../../styles/colors';

type CartelaType =
  | typeof veraoClaro
  | typeof veraoFrio
  | typeof veraoSuave
  | typeof invernoFrio
  | typeof invernoBrilhante
  | typeof invernoEscuro
  | typeof primaveraClara
  | typeof primaveraQuente
  | typeof primaveraBrilhante
  | typeof outonoSuave
  | typeof outonoQuente
  | typeof outonoEscuro;

type MelhoresCoresCardsProps = {
  facePath: string;
  cartela: CartelaType;
};

export default function MelhoresCoresCards({
  facePath,
  cartela,
}: MelhoresCoresCardsProps) {
  return (
    <View style={styles.melhoresCoresCardsContainer}>
      <View style={styles.melhoresCoresNameContainer}>
        <Text style={styles.melhoresCoresNameText}>{cartela.id}</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '49%',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            backgroundColor: cartela.one,
            width: '24%',
          }}
        >
          <Svg width="140" height="140" style={styles.faceSVG}>
            <ClipPath id="clip">
              <Ellipse cx="70" cy="70" rx="50" ry="70" />
            </ClipPath>
            <SvgImage
              href={{ uri: facePath }}
              width="140"
              height="140"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>

        <View
          style={{
            backgroundColor: cartela.two,
            width: '24%',
          }}
        >
          <Svg width="140" height="140" style={styles.faceSVG}>
            <ClipPath id="clip">
              <Ellipse cx="70" cy="70" rx="50" ry="70" />
            </ClipPath>
            <SvgImage
              href={{ uri: facePath }}
              width="140"
              height="140"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>

        <View
          style={{
            backgroundColor: cartela.three,
            width: '24%',
          }}
        >
          <Svg width="140" height="140" style={styles.faceSVG}>
            <ClipPath id="clip">
              <Ellipse cx="70" cy="70" rx="50" ry="70" />
            </ClipPath>
            <SvgImage
              href={{ uri: facePath }}
              width="140"
              height="140"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>

        <View
          style={{
            backgroundColor: cartela.four,
            width: '24%',
          }}
        >
          <Svg width="140" height="140" style={styles.faceSVG}>
            <ClipPath id="clip">
              <Ellipse cx="70" cy="70" rx="50" ry="70" />
            </ClipPath>
            <SvgImage
              href={{ uri: facePath }}
              width="140"
              height="140"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '49%',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            backgroundColor: cartela.five,
            width: '24%',
          }}
        >
          <Svg width="140" height="140" style={styles.faceSVG}>
            <ClipPath id="clip">
              <Ellipse cx="70" cy="70" rx="50" ry="70" />
            </ClipPath>
            <SvgImage
              href={{ uri: facePath }}
              width="140"
              height="140"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>

        <View
          style={{
            backgroundColor: cartela.six,
            width: '24%',
            borderWidth: cartela.id.includes('Inverno') ? 1 : 0,
            borderColor: colors.gray,
          }}
        >
          <Svg width="140" height="140" style={styles.faceSVG}>
            <ClipPath id="clip">
              <Ellipse cx="70" cy="70" rx="50" ry="70" />
            </ClipPath>
            <SvgImage
              href={{ uri: facePath }}
              width="140"
              height="140"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>

        <View
          style={{
            backgroundColor: cartela.seven,
            width: '24%',
          }}
        >
          <Svg width="140" height="140" style={styles.faceSVG}>
            <ClipPath id="clip">
              <Ellipse cx="70" cy="70" rx="50" ry="70" />
            </ClipPath>
            <SvgImage
              href={{ uri: facePath }}
              width="140"
              height="140"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>

        <View
          style={{
            backgroundColor: cartela.eight,
            width: '24%',
          }}
        >
          <Svg width="140" height="140" style={styles.faceSVG}>
            <ClipPath id="clip">
              <Ellipse cx="70" cy="70" rx="50" ry="70" />
            </ClipPath>
            <SvgImage
              href={{ uri: facePath }}
              width="140"
              height="140"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
}
