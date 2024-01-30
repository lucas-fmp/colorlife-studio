import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  melhoresCoresCardsContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    padding: 10,
    position: 'relative',
  },

  melhoresCoresNameContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    zIndex: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  melhoresCoresNameText: {
    fontFamily: fonts.f400regular,
    fontSize: 20,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },

  faceSVG: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -70 }, { translateY: -70 }],
  },
});
