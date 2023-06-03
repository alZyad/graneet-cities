import CityListContainer from "@/components/cityListContainer";
import SearchBar from "../components/searchBar";
import CSS from "csstype";
import { useHome } from "@/hooks/useHome";

export default function Home() {
  const { term, setTerm } = useHome();
  return (
    <>
      <div style={appContainer}>
        <SearchBar onTextInput={setTerm} />
        <div style={cityContainer}>
          <CityListContainer
            term={term}
            cityListContainerTitle="Villes de métropole"
          />
          <CityListContainer
            term={term}
            cityListContainerTitle="Villes d'outre-mer"
          />
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
  backgroundColor: "#eee",
};

const cityContainer: CSS.Properties = {
  display: "grid",
  flexGrow: 1,
  gap: "0px 30px",
  gridTemplateColumns: "1fr 1fr",
};
