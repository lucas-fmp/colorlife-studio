import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  dossiesContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  dossiesBackIcon: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 10,
  },

  dossiesLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    paddingVertical: 20,
  },

  dossiesLogo: {
    height: '100%',
  },

  dossiesButtonsContainer: {
    marginBottom: 40,
  },

  dossiesTitle: {
    color: colors.black,
    fontFamily: fonts.f600semiBold,
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 12,
  },

  dossiesButton: {
    backgroundColor: colors.black,
    alignSelf: 'center',
    alignItems: 'center',
    width: '85%',
    paddingVertical: 8,
    marginBottom: 4,
  },

  dossiesButtonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
