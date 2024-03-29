import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },

  footerContainerText: {
    display: "flex",
    flexDirection: "row",
  },

  footerText: {
    fontSize: 10,
  },
});
