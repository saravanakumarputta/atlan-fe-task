import { Events } from "@/contracts/Events";
import React, { createContext, useContext, useEffect, useState } from "react";

interface SQLQueryContextType {
  savedQueries: string[];
  recentQueries: string[];
}

const SQLQueryContext = createContext<SQLQueryContextType>({
  savedQueries: [],
  recentQueries: [],
});

export const useSQLContext = () => {
  const context = useContext(SQLQueryContext);

  if (!context) {
    throw new Error("SQL context not found");
  }
  return context;
};

export const SQLQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [savedQueries, setSavedQueries] = useState<string[]>([
    "select * from customers;",
    "select * from suppliers where country = 'USA';",
  ]);
  const [recentQueries, setRecentQueries] = useState<string[]>([]);

  useEffect(() => {
    const handleSaveQuery = (event: any) => {
      setSavedQueries((prevQuery) => [...prevQuery, event.detail]);
    };

    const handleSaveRecentQuery = (event: any) => {
      setRecentQueries((prevQuery) => [...prevQuery, event.detail]);
    };
    document.addEventListener(Events.SAVE_QUERY, handleSaveQuery);
    document.addEventListener(Events.RECENT_QUERY, handleSaveRecentQuery);
    return () => {
      document.removeEventListener(Events.SAVE_QUERY, handleSaveQuery);
      document.removeEventListener(Events.RECENT_QUERY, handleSaveRecentQuery);
    };
  }, []);

  return (
    <SQLQueryContext.Provider
      value={{
        savedQueries,
        recentQueries,
      }}
    >
      {children}
    </SQLQueryContext.Provider>
  );
};
