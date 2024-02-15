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
    fontSize: 20,
    textAlign: "center",
    width: "70%",
    paddingBottom: 12,
    alignSelf: "center",
  },

  contentContainer: {
    gap: 10,
    alignItems: "center",
  },

  text: {
    color: colors.black,
    fontFamily: fonts.f400regular,
    fontSize: 14,
    textAlign: "justify",
    width: "70%",
    marginBottom: 20,
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
