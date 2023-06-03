import React from "react";
import CSS from "csstype";
import CityList from "./cityList";

type cityListContainerProps = {
  cityListContainerTitle: string;
  term: string;
};

export default function CityListContainer({
  cityListContainerTitle,
  term,
}: cityListContainerProps) {
  return (
    <div style={container}>
      <h1 style={cityTitle}>{cityListContainerTitle}</h1>
      <CityList term={term} />
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
