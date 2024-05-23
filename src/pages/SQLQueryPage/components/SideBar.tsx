import { TimerIcon, FileTextIcon } from "@radix-ui/react-icons";
import { SidePanelHeader } from "../../../components/SidePanelHeader";
import { useSQLContext } from "@/pages/SQLQueryPage/context/SQLQueryContext";
import { useCallback } from "react";
import { Events } from "@/contracts/Events";

export const SideBar = () => {
  const { savedQueries, recentQueries } = useSQLContext();

  const handleQueryClick = useCallback((query: string) => {
    const event = new CustomEvent(Events.QUERY_SELECTED, {
      detail: query,
    });
    document.dispatchEvent(event);
  }, []);

  return (
    <div className="w-[20rem] border-r h-full p-4">
      <div className="flex flex-col h-full">
        <div>
          <SidePanelHeader
            title={`Saved Queries ${
              savedQueries.length ? `(${savedQueries.length})` : ""
            } `}
            icon={<FileTextIcon />}
          />
          <div className="overflow-y-auto h-[20rem] mt-2">
            {savedQueries.map((query, idx) => {
              return (
                <div
                  key={idx}
                  className="felex flex-col hover:bg-secondary/80 cursor-pointer p-1 rounded-md"
                  onClick={(event: any) => {
                    event.stopPropagation();
                    handleQueryClick(query.query);
                  }}
                >
                  <div className="flex gap-2">
                    <p className="text-sm font-regular">{`[${idx + 1}]`}</p>
                    <p
                      className="text-sm font-regular truncate"
                      title={query.query}
                    >
                      {query.name}
                    </p>
                  </div>
                  <p
                    className="text-sm font-regular truncate text-muted-foreground"
                    title={query.query}
                  >
                    {query.query}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-grow mt-4">
          <SidePanelHeader
            title={`Recent Queries ${
              recentQueries.length ? `(${recentQueries.length})` : ""
            }`}
            icon={<TimerIcon />}
          />
          <div className="overflow-y-auto h-[20rem] mt-2">
            {recentQueries.map((query, idx) => {
              return (
                <div
                  key={idx}
                  className="felex flex-col hover:bg-secondary/80 cursor-pointer p-1 rounded-md"
                  onClick={(event: any) => {
                    event.stopPropagation();
                    handleQueryClick(query.query);
                  }}
                >
                  <div className="flex gap-2">
                    <p className="text-sm font-regular">{`[${idx + 1}]`}</p>
                    <p
                      className="text-sm font-regular truncate"
                      title={query.query}
                    >
                      {query.query}
                    </p>
                    <br />
                  </div>
                  <p
                    className="text-sm font-regular truncate text-muted-foreground ml-7"
                    title={query.query}
                  >
                    {query.timestamp.toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
