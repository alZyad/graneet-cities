import React from "react";
import CSS from "csstype";

type SearchBarProps = {
  onTextInput: (term: string) => void;
};

export default function SearchBar({ onTextInput }: SearchBarProps) {
  return (
    <div style={container}>
      <div style={inlineText}>Je recherche...</div>
      <input
        style={{ ...textInput, ...textInputPlaceholder }}
        placeholder="...une ville, un code postal"
        onChange={(event) => {
          onTextInput(event.target.value);
        }}
      />
    </div>
  );
}

const container: CSS.Properties = {
  backgroundColor: "lightgrey",
  padding: "10px",
  borderRadius: "10px",
  height: "61px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const inlineText: CSS.Properties = {
  padding: "0 35px",
  color: "#000",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "30px",
  lineHeight: "37px",
  display: "flex",
  alignItems: "center",
};

const textInput: CSS.Properties = {
  backgroundColor: "#F0FCFF",
  borderRadius: "10px",
  color: "#000",
  padding: "0 28px",
  flexGrow: "1",
  border: 0,
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "30px",
  lineHeight: "37px",
  display: "flex",
  alignItems: "center",
};

// FIXME: isn't applied
const textInputPlaceholder: { [P in CSS.SimplePseudos]?: CSS.Properties } = {
  "::placeholder": {
    color: "#000",
  },
};
