import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  cartelasContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  cartelasBackIcon: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 10,
  },

  cartelasLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    paddingVertical: 20,
  },

  cartelasLogo: {
    height: '100%',
  },

  cartelasButtonsContainer: {
    marginBottom: 40,
  },

  cartelasTitle: {
    color: colors.black,
    fontFamily: fonts.f600semiBold,
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 12,
  },

  cartelasButton: {
    backgroundColor: colors.black,
    alignSelf: 'center',
    alignItems: 'center',
    width: '85%',
    paddingVertical: 8,
    marginBottom: 4,
  },

  cartelasButtonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
