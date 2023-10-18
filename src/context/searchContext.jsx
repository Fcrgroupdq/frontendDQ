import { createContext, useState } from "react";

const searchContext = createContext();

export default searchContext;

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState({
    latitude: "",
    longitude: "",
    category: "",
    location:"",
    categoryName:'',
    day:"",
    min:'',
    max:''
  });

  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};

