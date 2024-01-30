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

  melhoresCoresContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  melhoresCoresBackIcon: {
    position: 'absolute',
    left: 20,
    top: 30,
    zIndex: 20,
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
    fontFamily: fonts.f500medium,
    fontSize: 40,
  },

  swiperSubTitle: {
    fontFamily: fonts.f500medium,
    fontSize: 16,
  },

  swiperText: {
    fontFamily: fonts.f400regular,
    fontSize: 16,
  },

  comparativeCardsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },

  termosContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 25,
    paddingHorizontal: 70,
  },

  termosTitle: {
    fontFamily: fonts.f400regular,
    fontSize: 24,
  },

  termosText: {
    fontFamily: fonts.f400regular,
    fontSize: 14,
  },
});
