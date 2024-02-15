import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  scrollView: {
    justifyContent: "space-between",
    marginBottom: 40,
    flexGrow: 1,
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
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 12,
    width: "70%",
    alignSelf: "center",
  },

  contentContainer: {
    gap: 10,
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
  },

  text: {
    color: colors.black,
    fontFamily: fonts.f400regular,
    fontSize: 14,
    textAlign: "justify",
    paddingBottom: 12,
    width: "70%",
  },

  textInput: {
    width: "70%",
    borderWidth: 0.5,
    paddingVertical: 8,
    marginBottom: 10,
    paddingHorizontal: 12,
  },

  button: {
    alignSelf: "center",
    alignItems: "center",
    width: "70%",
    paddingVertical: 16,
    marginBottom: 16,
    backgroundColor: colors.black,
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
