import React, { useEffect } from "react";
import CSS from "csstype";
import { useCityList } from "@/hooks/useCityList";
import Loading from "./loading";

type CityListProps = {
  term: string;
  filter: "metropole" | "domtom";
};

export default function CityList({ term, filter }: CityListProps) {
  const { getInitialCities, getCitiesWithTerm, cities, fetchingCities } =
    useCityList();

  const statusMessageColor = fetchingCities
    ? "#e0af0ba0"
    : cities.length > 0
    ? "#39BB37A1"
    : "#BB3737A1";

  const statusMessageText = fetchingCities
    ? "Recherche en cours"
    : cities.length === 0
    ? `aucun ville ne correspond au texte saisi`
    : cities.length >= 100
    ? `plus de 100 villes correspondent au texte saisi`
    : `${cities.length} villes correspondent au texte saisi`;

  useEffect(() => {
    if (term === "") {
      getCitiesWithTerm("*", filter); // * forces an empty search, since special characters are ignored
    } else {
      const typeCityTimeout = setTimeout(
        () => getCitiesWithTerm(term, filter),
        800
      );
      return () => clearTimeout(typeCityTimeout);
    }
  }, [getInitialCities, getCitiesWithTerm, term, filter]);

  return (
    <>
      <p style={{ ...statusMessage, backgroundColor: statusMessageColor }}>
        {statusMessageText}
      </p>

      {fetchingCities ? (
        <div style={fetchingContainer}>
          <Loading />
        </div>
      ) : (
        <div style={container}>
          {cities.map((cityData) => (
            <div
              key={cityData.libelleAcheminement + cityData.codePostal}
              style={cityContainer}
            >
              <p style={city}>{cityData.nomCommune}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

const statusMessage: CSS.Properties = {
  padding: "20px",
  color: "#fff",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "15px",
  lineHeight: "18px",
  display: "flex",
  alignItems: "center",
};

const container: CSS.Properties = {
  paddingTop: "38px",
  display: "grid",
  gap: "25px 33px",
  gridTemplateColumns: "auto auto",
};

const fetchingContainer: CSS.Properties = {
  margin: "0 auto",
  paddingTop: "38px",
  color: "#000",
};

const cityContainer: CSS.Properties = {
  display: "flex",
  height: "60px",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
  padding: "10px",
  justifyContent: "center",
  backgroundColor: "#161C29A1",
};

const city: CSS.Properties = {
  flexGrow: "1",
  color: "#fff",
  fontFamily: "Montserrat",
  fontSize: "15px",
  fontWeight: "700",
  lineHeight: "18px",
  letterSpacing: "0em",
  textAlign: "left",
};
