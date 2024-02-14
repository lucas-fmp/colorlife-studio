import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  analiseContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  analiseScrollView: {
    justifyContent: "space-between",
    marginBottom: 40,
    flexGrow: 1,
  },

  analiseBackIcon: {
    position: "absolute",
    left: 20,
    top: 20,
    zIndex: 10,
  },

  analiseLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    paddingVertical: 20,
  },

  analiseLogo: {
    height: "100%",
  },

  analiseTitle: {
    color: colors.black,
    fontFamily: fonts.f600semiBold,
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 12,
    letterSpacing: -1,
  },

  analiseContentContainer: {
    gap: 10,
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
  },

  analiseText: {
    color: colors.black,
    fontFamily: fonts.f400regular,
    fontSize: 14,
    textAlign: "center",
    paddingBottom: 12,
    width: "85%",
  },

  analiseTextInput: {
    width: "70%",
    borderWidth: 0.5,
    paddingVertical: 8,
    marginBottom: 10,
    paddingHorizontal: 12,
  },

  analiseButton: {
    alignSelf: "center",
    alignItems: "center",
    width: "70%",
    paddingVertical: 16,
    marginBottom: 16,
    backgroundColor: colors.black,
  },

  analiseButtonText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
  },
});
