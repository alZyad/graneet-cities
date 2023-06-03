import { supabase } from "@/utils/supabase";
import { useCallback, useState } from "react";

type city = {
  codePostal: string;
  codeCommune: string;
  nomCommune: string;
  libelleAcheminement: string;
};

export const useHome = () => {
  const [term, setTerm] = useState("");

  const storeSearchTerm = async () => {
    await supabase.from("search").insert([{ search_term: term }]);
  };

  return {
    term,
    setTerm,
    storeSearchTerm,
  };
};
