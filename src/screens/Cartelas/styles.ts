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
    letterSpacing: -1,
  },

  cartelasButton: {
    backgroundColor: colors.black,
    alignSelf: 'center',
    width: '85%',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 10,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cartelasButtonPrimaryText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
    fontSize: 14,
  },

  cartelasButtonSecondaryText: {
    color: colors.white,
    fontFamily: fonts.f600semiBold,
    fontSize: 24,
    padding: 0,
    marginVertical: -10,
  },

  cartelasButtonImage: {
    overflow: 'hidden',
    width: 70,
    height: 80,
  },
});
