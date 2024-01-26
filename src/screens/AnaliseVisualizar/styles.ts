import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  turnPhoneContainer: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  turnPhoneText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
    width: '80%',
    textAlign: 'center',
  },

  turnPhoneImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },

  turnPhoneImage: {
    height: '100%',
  },

  analiseContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
