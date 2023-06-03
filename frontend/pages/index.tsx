import CityListContainer from "@/components/cityListContainer";
import SearchBar from "../components/searchBar";
import CSS from "csstype";

export default function Home() {
  return (
    <>
      <div style={appContainer}>
        <SearchBar />
        <div style={cityContainer}>
          <CityListContainer cityListContainerTitle="Villes de métropole" />
          <CityListContainer cityListContainerTitle="Villes d'outre-mer" />
        </div>
      </div>
    </>
  );
}

const appContainer: CSS.Properties = {
  height: "100%",
  width: "100%",
  position: "absolute",
  backgroundColor: "#eee",
};

const cityContainer: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  justifyContent: "center",
};
