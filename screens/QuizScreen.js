import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const QuizScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.tempText}>{route.params.name} Category quiz</Text>
      </SafeAreaView>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a33",
  },
  tempText: {
    color: "#fff",
  },
});
