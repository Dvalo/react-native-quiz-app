import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import fetchData from "../api";
import QuestionItem from "../components/QuestionItem/QuestionItem";
import { dummyQuestions } from "../utils/dummy";
import { getQuizApiUrl } from "../utils/requests";

const QuizScreen = ({ navigation, route }) => {
  const quizCategoryId = route.params.id;
  const data = dummyQuestions[0];
  // const { data, isLoading, isError } = fetchData(
  //   getQuizApiUrl(5, quizCategoryId)
  // );
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentQuestionIndx, setCurrentQuestionIndx] = useState(0);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState([]);
  const [currentAnswerPool, setCurrentAnswerPool] = useState([]);

  useEffect(() => {
    if (data.results && data.results.length > 0) {
      setCurrentQuestion(data.results[currentQuestionIndx].question);
      setCurrentCorrectAnswer(data.results[currentQuestionIndx].correct_answer);
      setCurrentAnswerPool([
        data.results[currentQuestionIndx].correct_answer,
        ...data.results[currentQuestionIndx].incorrect_answers,
      ]);
    }
  }, [data, currentQuestionIndx]);

  const nextQuestion = () => {
    setCurrentQuestionIndx(currentQuestionIndx + 1);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Text style={styles.tempText}>{route.params.name} Category quiz</Text> */}
        {/* {isError && <Text>Something went wrong ...</Text>}

        {isLoading && <Text>Loading ...</Text>} */}

        {currentAnswerPool.length ? (
          <QuestionItem
            question={currentQuestion}
            correct={currentCorrectAnswer}
            choices={currentAnswerPool}
            next={nextQuestion}
          />
        ) : null}
      </SafeAreaView>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a33",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  tempText: {
    color: "#fff",
  },
});
