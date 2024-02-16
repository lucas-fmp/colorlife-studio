import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  dossiesContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  dossiesBackIcon: {
    position: "absolute",
    left: 20,
    top: 20,
    zIndex: 10,
  },

  dossiesLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    paddingVertical: 20,
  },

  dossiesLogo: {
    height: "100%",
  },

  dossiesButtonsContainer: {
    marginBottom: 40,
  },

  dossiesTitle: {
    color: colors.black,
    fontFamily: fonts.f600semiBold,
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 12,
    letterSpacing: -1,
  },

  dossiesButton: {
    alignSelf: "center",
    width: "85%",
    alignItems: "center",
    paddingLeft: 20,
    marginBottom: 10,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
  },

  dossiesButtonPrimaryText: {
    color: colors.white,
    fontFamily: fonts.f400regular,
    fontSize: 14,
  },

  dossiesButtonSecondaryText: {
    color: colors.white,
    fontFamily: fonts.f600semiBold,
    fontSize: 24,
    marginVertical: -10,
  },

  dossiesButtonImage: {
    width: 80,
    height: 80,
    marginRight: -10,
  },
});
