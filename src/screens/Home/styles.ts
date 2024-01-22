import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  homeLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginVertical: 30,
  },

  homeLogo: {
    width: '55%',
  },

  homeButtonsContainer: {
    gap: 20,
  },

  homeButton: {
    backgroundColor: colors.black,
    alignSelf: 'center',
    alignItems: 'center',
    width: '70%',
    paddingVertical: 18,
  },

  homeButtonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
