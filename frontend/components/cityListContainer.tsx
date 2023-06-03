import React from "react";
import CSS from "csstype";
import CityList from "./cityList";
import { colors } from "@/utils/colors";

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
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
};

const cityTitle: CSS.Properties = {
  fontWeight: "700",
  fontSize: "30px",
  lineHeight: "37px",
  textAlign: "center",
  paddingBottom: "20px",
};
