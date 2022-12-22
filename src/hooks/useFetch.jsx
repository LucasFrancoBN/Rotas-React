import React from "react";

const useFetch = (url) => {
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchDatas() {
      let response;
      let json;
      try {
        setLoading(true);
        response = await fetch(url);
        json = await response.json();
        if (response.ok === false) throw new Error(json.message);
      } catch (erro) {
        json = null;
        setError("Houve um erro: " + erro);
      } finally {
        setDados(json);
        setLoading(false);
      }
    }
    fetchDatas();
  }, []);

  return { dados, loading, error };
};

export default useFetch;
