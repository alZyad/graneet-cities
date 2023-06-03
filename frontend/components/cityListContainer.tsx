import React from "react";
import CSS from "csstype";
import CityList from "./cityList";

type cityListContainerProps = {
  filter: "metropole" | "domtom";
  term: string;
};

export default function CityListContainer({
  filter,
  term,
}: cityListContainerProps) {
  return (
    <div style={container}>
      <h1 style={cityTitle}>
        {filter === "metropole" ? "Villes de métropole" : "Villes d'outre-mer"}
      </h1>
      <CityList term={term} filter={filter} />
    </div>
  );
}

const container: CSS.Properties = {
  backgroundColor: "lightgrey",
  margin: "30px 0px",
  padding: "20px 35px",
  width: "100%",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
};

const cityTitle: CSS.Properties = {
  height: "61px",
  color: "#000",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "30px",
  lineHeight: "37px",
  textAlign: "center",
};
