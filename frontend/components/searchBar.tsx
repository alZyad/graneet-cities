import React from "react";
import CSS from "csstype";
import { colors } from "@/utils/colors";

type SearchBarProps = {
  onTextInput: (term: string) => void;
};

export default function SearchBar({ onTextInput }: SearchBarProps) {
  return (
    <div style={container}>
      <div style={inlineText}>Je recherche...</div>
      <input
        style={textInput}
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
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const inlineText: CSS.Properties = {
  padding: "0 35px",
  fontWeight: "700",
  fontSize: "30px",
  lineHeight: "37px",
  display: "flex",
  alignItems: "center",
};

const textInput: CSS.Properties = {
  backgroundColor: colors.whiteBis,
  borderRadius: "10px",
  padding: "10px 28px",
  flexGrow: "1",
  border: 0,
  fontWeight: "700",
  fontSize: "30px",
  lineHeight: "37px",
  display: "flex",
  alignItems: "center",
};
