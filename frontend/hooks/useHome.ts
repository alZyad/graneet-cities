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
    const { data, error } = await supabase
      .from("search")
      .insert([{ search_term: term }]);
    console.log({ data, error });
  };

  return {
    term,
    setTerm,
    storeSearchTerm,
  };
};
