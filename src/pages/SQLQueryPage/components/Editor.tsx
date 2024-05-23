import { Textarea } from "../../../components/ui/textarea";
import { useCallback, Suspense } from "react";

import { EditorToolBar } from "../../../components/Editor/EditorToolbar";
import { useSqlQuery } from "../hooks/UseSqlQuery";
import React from "react";

const SuppliersResult = React.lazy(
  () => import("../../../components/Editor/SuppliersResult")
);

const PersonResult = React.lazy(
  () => import("../../../components/Editor/PersonResult")
);

type EditorProps = {
  isActiveEditor: boolean;
  id: number;
};

const Editor: React.FC<EditorProps> = ({ isActiveEditor }) => {
  const { query, setQuery, executeQuery, saveQuery, queryResult } =
    useSqlQuery(isActiveEditor);

  const handleQueryChange = useCallback((event: any) => {
    const value = event.target.value;
    setQuery(value);
  }, []);

  return (
    <>
      <EditorToolBar
        onSave={saveQuery}
        onRun={executeQuery}
        isButtonsDisabled={!query}
      />

      <Textarea
        id="sql-query"
        rows={6}
        placeholder="Write your sql query"
        value={query}
        onChange={handleQueryChange}
      />
      {queryResult ? (
        <div className="mt-4 border-t border-black resultTable">
          {queryResult === "customers" ? (
            <Suspense fallback={<div>Loading...</div>}>
              <PersonResult />
            </Suspense>
          ) : null}
          {queryResult === "suppliers" ? (
            <Suspense fallback={<div>Loading...</div>}>
              <SuppliersResult />
            </Suspense>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Editor;
