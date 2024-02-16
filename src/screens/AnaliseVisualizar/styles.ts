import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  turnPhoneContainer: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  turnPhoneText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
    width: "80%",
    textAlign: "center",
  },

  turnPhoneImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },

  turnPhoneImage: {
    height: "100%",
  },

  analiseContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },

  analiseBackIcon: {
    position: "absolute",
    left: 20,
    top: 30,
    zIndex: 10,
  },

  analiseIndexIcon: {
    position: "absolute",
    right: 20,
    top: 30,
    zIndex: 10,
  },

  swiperContainer: {
    flex: 1,
    transform: [{ rotate: "90deg" }],
  },

  viewPager: {
    flex: 1,
  },

  swiperPage: {
    justifyContent: "center",
    alignItems: "center",
  },

  swiperHeader: {
    flexDirection: "row",
    position: "absolute",
    top: 30,
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
  },

  swiperHeaderText: {
    fontFamily: fonts.f400regular,
  },

  swiperTitle: {
    fontFamily: fonts.f200extralight,
    fontSize: 60,
    letterSpacing: 2,
    lineHeight: 65,
  },

  comparativeCardsContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },

  termosContainer: {
    width: "100%",
    height: "100%",
    paddingVertical: 25,
    paddingHorizontal: 70,
    gap: 10,
  },

  scrollViewTitle: {
    fontFamily: fonts.f300light,
    fontSize: 28,
  },

  scrollViewText: {
    fontFamily: fonts.f300light,
    fontSize: 14,
    color: colors.black,
  },

  titleContainer: {
    position: "absolute",
    width: "80%",
    bottom: 60,
    justifyContent: "space-between",
  },
});
