import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 160,
    marginVertical: 60,
  },

  logo: {
    height: "100%",
  },

  buttonsContainer: {
    marginBottom: 40,
  },

  button: {
    backgroundColor: colors.black,
    alignSelf: "center",
    alignItems: "center",
    width: "70%",
    paddingVertical: 16,
    marginBottom: 15,
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
