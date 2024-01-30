import { ImageBackground, Text, View } from 'react-native';
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
            borderWidth: cartela.one === '#FFFFFF' ? 1 : 0,
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
            backgroundColor: cartela.two,
            width: '24%',
            borderWidth: cartela.two === '#FFFFFF' ? 1 : 0,
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
            backgroundColor: cartela.three,
            width: '24%',
            borderWidth: cartela.three === '#FFFFFF' ? 1 : 0,
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
            backgroundColor: cartela.four,
            width: '24%',
            borderWidth: cartela.four === '#FFFFFF' ? 1 : 0,
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
            borderWidth: cartela.five === '#FFFFFF' ? 1 : 0,
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
            backgroundColor: cartela.six,
            width: '24%',
            borderWidth: cartela.six === '#FFFFFF' ? 1 : 0,
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
            borderWidth: cartela.seven === '#FFFFFF' ? 1 : 0,
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

        <View style={{ width: '24%' }}>
          <View style={{ flex: 1 }}>
            <ImageBackground
              style={{ flex: 1 }}
              source={
                cartela.id.includes('Verão') || cartela.id.includes('Inverno')
                  ? require('../../assets/silver-texture.png')
                  : require('../../assets/gold-texture.png')
              }
              resizeMode="cover"
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
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
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
}
