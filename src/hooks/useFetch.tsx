import { useCallback, useEffect, useState } from "react";
import { FetchProducts, FetchResult } from "../interfaces/interface";

const useFetch: (props: FetchProducts) => FetchResult = ({
  url,
  method,
  accessToken,
}) => {
  const [fetchRequest, setFetchRequest] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFetch = useCallback(() => {
    setLoading(true);
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Client-ID ${accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response Failed");
        return res.json();
      })
      .then((data) => setFetchRequest(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url, method]);

  useEffect(() => {
    onFetch();
  }, [onFetch]);

  return { fetchRequest, error, loading };
};

export default useFetch;
