import axios from "axios";
import { useEffect, useState } from "react";

function useFetchData(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setLoading(false);
        setFoods(response.data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    })();

    return () => {};
  }, [url]);
  return { error, loading, foods };
}

export default useFetchData;
