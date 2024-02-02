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
    justifyContent: 'center',
    alignItems: 'center',
  },

  analiseBackIcon: {
    position: 'absolute',
    left: 20,
    top: 30,
    zIndex: 10,
  },

  swiperContainer: {
    flex: 1,
    transform: [{ rotate: '90deg' }],
  },

  viewPager: {
    flex: 1,
  },

  swiperPage: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  swiperHeader: {
    position: 'absolute',
    top: 0,
    paddingVertical: 20,
    fontFamily: fonts.f400regular,
    fontSize: 10,
    opacity: 0.5,
  },

  swiperTitle: {
    fontFamily: fonts.f200extralight,
    fontSize: 50,
    letterSpacing: 10,
  },

  comparativeCardsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});
