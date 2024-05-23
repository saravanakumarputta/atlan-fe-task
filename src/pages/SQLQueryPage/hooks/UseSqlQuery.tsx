import { Events } from "@/contracts/Events";
import { useCallback, useEffect, useState } from "react";

const sendRecentQueryEvent = (query: string) => {
  const event = new CustomEvent(Events.RECENT_QUERY, {
    detail: query,
  });
  document.dispatchEvent(event);
};

const sendSaveQueryEvent = (query: string) => {
  const event = new CustomEvent(Events.SAVE_QUERY, {
    detail: query,
  });
  document.dispatchEvent(event);
};

export const useSqlQuery = (isActiveEditor: boolean) => {
  const [query, setQuery] = useState<string>();

  const [queryResult, setQueryResult] = useState<string>();

  const handleSetQueryResult = useCallback(
    (query: string) => {
      let result = null;
      if (query === "select * from customers;") {
        result = "customers";
      }

      if (query === "select * from suppliers where country = 'USA';") {
        result = "suppliers";
      }

      setQueryResult(result || "suppliers");
    },
    [setQueryResult]
  );

  const executeQuery = useCallback(() => {
    if (query) {
      setQuery(query);
      sendRecentQueryEvent(query);
      handleSetQueryResult(query);
    }
  }, [query, handleSetQueryResult]);

  const saveQuery = () => {
    if (query) {
      sendSaveQueryEvent(query);
    }
  };

  useEffect(() => {
    const handleSelectedQuery = (event: any) => {
      if (isActiveEditor) {
        setQuery(event.detail);
      }
    };
    document.addEventListener(Events.QUERY_SELECTED, handleSelectedQuery);
    return () =>
      document.removeEventListener(Events.QUERY_SELECTED, handleSelectedQuery);
  }, [isActiveEditor]);

  return {
    query,
    setQuery,
    queryResult,
    executeQuery,
    saveQuery,
  };
};
