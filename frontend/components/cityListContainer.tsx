import React from "react";
import CSS from "csstype";
import CityList from "./cityList";

type cityListContainerProps = {
  cityListContainerTitle: string;
};

export default function CityListContainer({
  cityListContainerTitle,
}: cityListContainerProps) {
  return (
    <div style={container}>
      <h1 style={cityTitle}>{cityListContainerTitle}</h1>
      <CityList />
    </div>
  );
}

const container: CSS.Properties = {
  flexGrow: 1,
  backgroundColor: "lightgrey",
  margin: "30px 15px",
  padding: "20px 35px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
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
