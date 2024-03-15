import axios from "axios";
import { useEffect, useState } from "react";

function useFetchData(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setdata] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setLoading(false);
        setdata(response.data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    })();
  }, [url]);
  return { error, loading, data };
}

export default useFetchData;
