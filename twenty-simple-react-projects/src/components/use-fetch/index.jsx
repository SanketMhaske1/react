import { useEffect, useState } from "react";

function UseFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchData() {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response) throw new Error(response.statusText);
      const data = await response.json();
      setData(data);
      setErrorMessage(null);
      setPending(false);
      console.log(data);
    } catch (error) {
      console.log("Fail To Fetch Images");
      setErrorMessage(error.message);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, errorMessage, pending };
}

export default UseFetch;
