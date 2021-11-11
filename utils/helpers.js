export function findCorrectAnswerIndex(arr, answer) {
  return arr.indexOf(arr.find((item) => item === answer));
}

export function shuffleAnswers(arr) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
