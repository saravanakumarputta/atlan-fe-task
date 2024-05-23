import { Textarea } from "../../../components/ui/textarea";
import { useCallback } from "react";

import { EditorToolBar } from "../../../components/Editor/EditorToolbar";
import { PersonResult } from "../../../components/Editor/EditorResult";
import { useSqlQuery } from "../hooks/UseSqlQuery";
import { SuppliersResult } from "@/components/Editor/SuppliersResult";

type EditorProps = {
  isActiveEditor: boolean;
  id: number;
};

export const Editor: React.FC<EditorProps> = ({ isActiveEditor }) => {
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
          {queryResult === "customers" ? <PersonResult /> : null}
          {queryResult === "suppliers" ? <SuppliersResult /> : null}
        </div>
      ) : null}
    </>
  );
};
