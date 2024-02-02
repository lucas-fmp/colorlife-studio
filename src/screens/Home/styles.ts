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
    height: 160,
    marginVertical: 60,
  },

  homeLogo: {
    height: '100%',
  },

  homeButtonsContainer: {
    marginBottom: 40,
  },

  homeButton: {
    backgroundColor: colors.black,
    alignSelf: 'center',
    alignItems: 'center',
    width: '70%',
    paddingVertical: 16,
    marginBottom: 15,
  },

  homeButtonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
