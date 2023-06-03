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
              <span style={city}>{cityData.nomCommune}</span>
              <span style={postalCode}>{cityData.codePostal}</span>
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
  height: "60px",
  padding: "10px",
  backgroundColor: "#161C29A1",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const city: CSS.Properties = {
  color: "#fff",
  fontFamily: "Montserrat",
  fontSize: "15px",
  fontWeight: "700",
  lineHeight: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  padding: "2px",
};

const postalCode: CSS.Properties = {
  color: "#8C8F9A",
  fontFamily: "Montserrat",
  fontSize: "15px",
  fontWeight: "700",
  letterSpacing: "0em",
  fontStyle: "normal",
  lineHeight: "18px",
  textAlign: "right",
  padding: "2px",
};
