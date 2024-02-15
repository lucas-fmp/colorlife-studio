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
    paddingBottom: 16,
    letterSpacing: -1,
  },

  contentContainer: {
    gap: 10,
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
    flex: 1,
  },

  button: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    paddingLeft: 20,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
  },

  textButton: {
    color: "white",
    maxWidth: "70%",
    fontFamily: fonts.f400regular,
    paddingTop: 5,
    fontSize: 16,
  },

  imageButton: {
    width: 80,
    height: 80,
  },

  swipeableContainer: {
    width: "85%",
    alignSelf: "center",
    height: 80,
    marginBottom: 10,
  },

  deleteIcon: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },

  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontFamily: fonts.f400regular,
  },
});
