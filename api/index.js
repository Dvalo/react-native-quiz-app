import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchData(apiUrl) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        if (response["data"]) {
          setData(response.data);
          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsError(err);
      });
  }, [apiUrl]);
  return {
    data,
    isError,
    isLoading,
  };
}
