import * as ImagePicker from "expo-image-picker";
import * as FaceDetector from "expo-face-detector";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";

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

export async function pickImageAndDetectFace(
  setImage: Function,
  setHasFace: Function,
  setHasMultipleFaces: Function
) {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
    detectFace(result.assets[0].uri, setImage, setHasFace, setHasMultipleFaces);
  }
}

async function detectFace(
  uri: string,
  setImage: Function,
  setHasFace: Function,
  setHasMultipleFaces: Function
) {
  const options = { mode: FaceDetector.FaceDetectorMode.fast };
  const { faces } = await FaceDetector.detectFacesAsync(uri, options);

  if (faces.length === 0) {
    setHasFace(false);
    setImage(null);
    setHasMultipleFaces(false);
  } else if (faces.length === 1) {
    const { bounds } = faces[0];
    cropImage(uri, bounds, setImage);
    setHasFace(true);
    setHasMultipleFaces(false);
  } else {
    setImage(null);
    setHasMultipleFaces(true);
    setHasFace(true);
  }
}

async function cropImage(uri: string, bounds: FaceBounds, setImage: Function) {
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
}
