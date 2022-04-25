import React, { useState, useContext, useEffect } from 'react';
import { useCallback, createContext } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [characters, setCharacters] = useState([]);

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  const fetchCharacters = useEffect(() => {
    try {
      axios.get(api).then((res) => {
        setCharacters(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 600);
      });
    } catch (error) {
      console.log(error.res);
      setLoading(true);
    }
  }, [api]);
  return (
    <AppContext.Provider
      value={{
        characters,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
