import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const difficultyLevels = [
    {
      type: "Easy",
      color: "#3791ce",
    },
    {
      type: "Medium",
      color: "#e7c171",
    },
    {
      type: "Hard",
      color: "#e66767",
    },
  ];
  const [quizDifficulty, setQuizDifficulty] = useState("Easy");

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.difficlutyWrapper}>
          {difficultyLevels.map(({ type, color }) => (
            <Pressable
              style={[styles.button, {backgroundColor: color, marginTop: 15,}]}
              key={type}
              onPress={() => setQuizDifficulty(type)}
            >
              <Text style={styles.buttonText}>{type}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.questionAmtWrapper}>
          <View style={styles.questionAmtInner}>
            <Pressable
              style={[styles.button, styles.countBtn]}
              onPress={() => quitQuiz()}
            >
              <Text style={styles.buttonText}>5</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.countBtn]}
              onPress={() => quitQuiz()}
            >
              <Text style={styles.buttonText}>10</Text>
            </Pressable>
          </View>
          <View style={styles.questionAmtInner}>
            <Pressable
              style={[styles.button, styles.countBtn]}
              onPress={() => quitQuiz()}
            >
              <Text style={styles.buttonText}>15</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.countBtn]}
              onPress={() => quitQuiz()}
            >
              <Text style={styles.buttonText}>20</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a33",
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 24,
    color: "#c4c4c4",
    marginTop: 20,
    marginBottom: 5,
  },
  difficlutyWrapper: {},
  questionAmtWrapper: {
    marginTop: 30,
  },
  questionAmtInner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#10b18a",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  easy: {
    backgroundColor: "#3791ce",
  },
  medium: {
    backgroundColor: "#e7c171",
    marginTop: 15,
  },
  hard: {
    backgroundColor: "#e66767",
    marginTop: 15,
  },
  countBtn: {
    flex: 1,
    marginTop: 10,
  },
});
