const API_PATH = "https://opentdb.com/api.php";

export const getQuizApiUrl = (amount, category) => {
  return `${API_PATH}?amount=${amount}&category=${category}`;
};