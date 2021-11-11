import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  questionText: {
    color: '#a1a6bb',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  item: {
    marginTop: 10,
    marginEnd: 20,
    color: "#c3c7d3",
  },
  answerWrapper: {
    marginTop: 30,
  },
  answerWrapperSelected: {
    backgroundColor: "rgba(100, 107, 135, 0.3)",
    borderRadius: 4,
    transform: [{ scale: 1.02 }],
  },
  answerInner: {
    flexDirection: "row",
    alignContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "#646b87",
    borderRadius: 4,
    color: "#646b87",
  },
  answerInnerIncorrect: {
    borderColor: "#ff4b61",
  },
  answerInnerCorrect: {
    borderColor: "#14d7a8",
  },
  answerText: {
    flex: 1,
    color: "#c3c7d3",
  },
  answerIndicator: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#646b87",
    borderRadius: 50,
  },
  answerIndicatorIncorrect: {
    backgroundColor: "#ff4b61",
    borderColor: "#ff4b61",
  },
  answerIndicatorCorrect: {
    backgroundColor: "#14d7a8",
    borderColor: "#14d7a8",
    shadowColor: "#14d7a8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.85,
    elevation: 5,
  },
  answerIcon: {
    color: "#fff",
  },
  questionControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 80,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    flex: 1,
  },
  buttonQuit: {
    backgroundColor: "#ff4b61",
    marginRight: 20,
  },
  buttonNext: {
    backgroundColor: "#0bd6f9",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export default styles;
