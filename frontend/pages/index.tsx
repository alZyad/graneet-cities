import CityListContainer from "@/components/cityListContainer";
import SearchBar from "../components/searchBar";
import CSS from "csstype";
import { useHome } from "@/hooks/useHome";
import { colors } from "@/utils/colors";
import { useEffect } from "react";

export default function Home() {
  const { term, setTerm, storeSearchTerm } = useHome();

  useEffect(() => {
    const storeSearchTermTimeout =
      term !== "" ? setTimeout(() => storeSearchTerm(), 800) : undefined;
    return () => clearTimeout(storeSearchTermTimeout);
  }, [storeSearchTerm, term]);

  return (
    <>
      <div style={appContainer}>
        <SearchBar onTextInput={setTerm} />
        <div style={cityContainer}>
          <CityListContainer term={term} filter="metropole" />
          <CityListContainer term={term} filter="domtom" />
        </div>
      </div>
    </>
  );
}

const appContainer: CSS.Properties = {
  top: 0,
  left: 0,
  minHeight: "100%",
  minWidth: "100%",
  position: "absolute",
  padding: "30px",
  backgroundColor: colors.whiteTris,
};

const cityContainer: CSS.Properties = {
  display: "grid",
  flexGrow: 1,
  gap: "0px 30px",
  gridTemplateColumns: "1fr 1fr",
};
