import {
  Dimensions,
  Platform,
  PixelRatio
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

/** Normalize size for different screen sizes */
const normalize = size => {
  const scale = screenWidth / 320;
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export {
  screenHeight,
  screenWidth,
  normalize,
}
