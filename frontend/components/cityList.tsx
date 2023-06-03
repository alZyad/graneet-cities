import React, { useEffect } from "react";
import CSS from "csstype";
import { useCityList } from "@/hooks/useCityList";

type CityListProps = {
  term: string;
};

export default function CityList({ term }: CityListProps) {
  const {
    statusMessageColor,
    statusMessageText,
    getInitialCities,
    getCitiesWithTerm,
    cities,
    fetchingCities,
  } = useCityList();

  useEffect(() => {
    if (term === "") {
      getInitialCities();
    } else {
      const typeCityTimeout = setTimeout(() => getCitiesWithTerm(term), 800);
      return () => clearTimeout(typeCityTimeout);
    }
  }, [getInitialCities, getCitiesWithTerm, term]);

  return (
    <>
      <p style={{ ...statusMessage, backgroundColor: statusMessageColor }}>
        {statusMessageText}
      </p>

      {fetchingCities ? (
        <div style={fetchingContainer}>Fetching</div>
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
