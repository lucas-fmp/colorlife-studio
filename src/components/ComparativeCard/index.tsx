import { Image, View } from "react-native";
import { styles } from "./styles";
import Svg, { Image as SvgImage, ClipPath, Ellipse } from "react-native-svg";
import ImagePaths from "../../utils/comparativeCardsPaths";

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
          height: "100%",
          maxWidth: height / 3.2,
        }}
        resizeMode="contain"
      />

      <Svg width="250" height="250" style={styles.comparativeFaceSVG}>
        <ClipPath id="clip">
          <Ellipse cx="125" cy="125" rx="90" ry="125" />
        </ClipPath>
        <SvgImage
          href={{ uri: facePath }}
          width="250"
          height="250"
          clipPath="url(#clip)"
        />
      </Svg>
    </View>
  );
}
