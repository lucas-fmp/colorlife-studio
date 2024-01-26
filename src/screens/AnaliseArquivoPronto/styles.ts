import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  analiseContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  analiseBackIcon: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 10,
  },

  analiseLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    paddingVertical: 20,
  },

  analiseLogo: {
    height: '100%',
  },

  analiseTitle: {
    color: colors.black,
    fontFamily: fonts.f600semiBold,
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 12,
  },

  analiseContentContainer: {
    gap: 10,
    alignItems: 'center',
  },

  analiseText: {
    color: colors.black,
    fontFamily: fonts.f400regular,
    fontSize: 14,
    textAlign: 'justify',
    paddingBottom: 12,
    width: '85%',
  },

  analiseButton: {
    backgroundColor: colors.black,
    alignSelf: 'center',
    alignItems: 'center',
    width: '70%',
    paddingVertical: 16,
    marginBottom: 20,
  },

  analiseButtonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
