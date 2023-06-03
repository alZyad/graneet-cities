import React from "react";
import CSS from "csstype";
import { useCityList } from "@/hooks/useCityList";

export default function CityList() {
  const { statusMessageColor, statusMessageText } = useCityList();
  return (
    <>
      <p style={{ ...statusMessage, backgroundColor: statusMessageColor }}>
        {statusMessageText}
      </p>

      <div style={container}>
        <div style={cityContainer}>
          <p style={city}>Paris</p>
        </div>
        <div style={cityContainer}>
          <p style={city}>Lyon</p>
        </div>
        <div style={cityContainer}>
          <p style={city}>Marseille</p>
        </div>
      </div>
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
