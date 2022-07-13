import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const sendRequest = useCallback(async (reqConfig, applyData) => {
    setIsLoading(true);
    try {
      const response = await fetch(reqConfig.url, {
        method: reqConfig.method ? reqConfig.method : "GET",
        headers: reqConfig.headers ? reqConfig.headers : {},
        body: reqConfig.body ? JSON.stringify(reqConfig.body) : null,
      });
      if (!response.ok) throw new Error("Something Went Wrong!");
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
