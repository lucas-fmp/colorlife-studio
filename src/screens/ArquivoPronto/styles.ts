import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: "absolute",
    left: 20,
    top: 20,
    zIndex: 10,
  },

  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    paddingVertical: 20,
  },

  logo: {
    height: "100%",
  },

  title: {
    color: colors.black,
    fontFamily: fonts.f600semiBold,
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35,
  },

  contentContainer: {
    gap: 10,
    alignItems: "center",
  },

  text: {
    color: colors.black,
    fontFamily: fonts.f300light,
    fontSize: 16,
    textAlign: "justify",
    letterSpacing: 5,
  },

  button: {
    backgroundColor: colors.black,
    alignSelf: "center",
    alignItems: "center",
    width: "70%",
    paddingVertical: 16,
    marginBottom: 20,
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
