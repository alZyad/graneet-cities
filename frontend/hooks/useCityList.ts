import { useCallback, useState } from "react";

type city = {
  codePostal: string;
  codeCommune: string;
  nomCommune: string;
  libelleAcheminement: string;
};

export const useCityList = () => {
  const [cities, setCities] = useState<city[]>([]);
  const [fetchingCities, setFetchingCities] = useState(false);

  const getInitialCities = useCallback(() => {
    setFetchingCities(true);
    fetch("http://localhost:8000/api/cities")
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setFetchingCities(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const getCitiesWithTerm = useCallback((term: string) => {
    setFetchingCities(true);
    fetch(`http://localhost:8000/api/searchCity/${term}`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setFetchingCities(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return {
    statusMessageText: "6 villes correspondent au texte saisi",
    statusMessageColor: "#39BB37A1",
    getInitialCities,
    getCitiesWithTerm,
    cities,
    fetchingCities,
  };
};