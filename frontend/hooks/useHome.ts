import { useCallback, useState } from "react";

type city = {
  codePostal: string;
  codeCommune: string;
  nomCommune: string;
  libelleAcheminement: string;
};

export const useHome = () => {
  const [term, setTerm] = useState("");

  return {
    term,
    setTerm,
  };
};
