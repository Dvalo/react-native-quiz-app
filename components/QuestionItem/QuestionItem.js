import React, { useState, useEffect } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { decode } from "html-entities";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheck,
  faTimes,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { findCorrectAnswerIndex, shuffleAnswers } from "../../utils/helpers";
import styles from "./styles";

function QuestionItem(props) {
  const navigation = useNavigation();
  const { question, correct, choices, next } = props;

  const [userAnswer, setUserAnswer] = useState(null);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState();

  useEffect(() => {
    setShuffledChoices(shuffleAnswers(choices));
  }, [choices]);

  useEffect(() => {
    setCorrectAnswerIndex(findCorrectAnswerIndex(shuffledChoices, correct));
  }, [shuffledChoices]);

  const quitQuiz = () => {
    navigation.navigate("Home");
  };

  const nextQuestion = () => {
    setUserAnswer(null);
    next();
  };

  const confirmAnswer = (index) => {
    setUserAnswer(index);
  };

  return (
    <View style={styles.item}>
      <Text style={styles.questionText}>{decode(question, { level: "html5" })}</Text>
      {shuffledChoices &&
        shuffledChoices.map((item, index) => (
          <Pressable
            key={item}
            onPress={() => confirmAnswer(index)}
            disabled={userAnswer !== null}
            style={
              userAnswer === index
                ? [styles.answerWrapper, styles.answerWrapperSelected]
                : [styles.answerWrapper]
            }
          >
            <View
              style={
                userAnswer === null
                  ? styles.answerInner
                  : index === correctAnswerIndex
                  ? [styles.answerInner, styles.answerInnerCorrect]
                  : [styles.answerInner, styles.answerInnerIncorrect]
              }
            >
              <Text style={styles.answerText} key={item}>
                {item}
              </Text>
              <View
                style={
                  userAnswer === null
                    ? styles.answerIndicator
                    : index === correctAnswerIndex
                    ? [styles.answerIndicator, styles.answerIndicatorCorrect]
                    : [styles.answerIndicator, styles.answerIndicatorIncorrect]
                }
              >
                <FontAwesomeIcon
                  icon={
                    userAnswer === null
                      ? faQuestion
                      : index === correctAnswerIndex
                      ? faCheck
                      : faTimes
                  }
                  style={styles.answerIcon}
                  size={10}
                />
              </View>
            </View>
          </Pressable>
        ))}

      <View style={styles.questionControls}>
        <Pressable
          style={[styles.button, styles.buttonQuit]}
          onPress={() => quitQuiz()}
        >
          <Text style={styles.buttonText}>Quit Quiz</Text>
        </Pressable>

        <Pressable
          style={
            userAnswer === null
              ? [styles.button, styles.buttonNext, styles.buttonDisabled]
              : [styles.button, styles.buttonNext]
          }
          onPress={() => nextQuestion()}
          disabled={userAnswer === null}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default QuestionItem;
