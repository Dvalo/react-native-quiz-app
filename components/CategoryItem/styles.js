import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    marginEnd: 20,
    flex: 1,
    flexShrink: 1,
  },
  itemPhoto: {
    width: 300,
    height: 300,
  },
  imageOlverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#000",
    opacity: 0.35,
  },
  itemText: {
    position: "absolute",
    top: 10,
    left: 10,
    paddingRight: 30,
    color: "#fff",
    fontWeight: "700",
    fontSize: 36,
  },
});

export default styles;
