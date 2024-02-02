import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  melhoresCoresContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  melhoresCoresBackIcon: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 10,
  },

  melhoresCoresLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    paddingVertical: 20,
  },

  melhoresCoresLogo: {
    height: '100%',
  },

  melhoresCoresTitle: {
    color: colors.black,
    fontFamily: fonts.f600semiBold,
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 12,
    letterSpacing: -1,
    width: '90%',
    alignSelf: 'center',
  },

  melhoresCoresContentContainer: {
    gap: 10,
    alignItems: 'center',
  },

  melhoresCoresText: {
    color: colors.black,
    fontFamily: fonts.f400regular,
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 12,
    width: '85%',
  },

  melhoresCoresButton: {
    backgroundColor: colors.black,
    alignSelf: 'center',
    alignItems: 'center',
    width: '70%',
    paddingVertical: 16,
    marginBottom: 20,
  },

  melhoresCoresButtonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
