import { Image, View } from 'react-native';
import { styles } from './styles';
import Svg, { Image as SvgImage, ClipPath, Ellipse } from 'react-native-svg';
import ImagePaths from '../../utils/imagePaths';

type ImagePathsKeys = keyof typeof ImagePaths;

type ComparativeCardProps = {
  height: number;
  cardKey: ImagePathsKeys;
  facePath: string;
};

export default function ComparativeCard({
  height,
  cardKey,
  facePath,
}: ComparativeCardProps) {
  const cardPath = ImagePaths[cardKey];

  return (
    <View>
      <Image
        source={cardPath}
        style={{
          height: '100%',
          maxWidth: height / 4,
        }}
        resizeMode="contain"
      />

      <Svg width="200" height="200" style={styles.comparativeFaceSVG}>
        <ClipPath id="clip">
          <Ellipse cx="100" cy="100" rx="70" ry="100" />
        </ClipPath>
        <SvgImage
          href={{ uri: facePath }}
          width="200"
          height="200"
          clipPath="url(#clip)"
        />
      </Svg>
    </View>
  );
}
