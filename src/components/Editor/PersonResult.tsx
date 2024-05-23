import "./styles.css";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { Person, makeData } from "./makedata";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Barchart } from "../charts/Barchart";
import { Piechart } from "../charts/Piechart";

const PersonColumns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 60,
  },
  {
    accessorKey: "firstName",
    cell: (info) => info.getValue(),
    header: () => (
      <div className="h-[175px] pb-4 flex flex-col justify-center items-center">
        <span>First Name</span> <span>1200 unique values</span>
      </div>
    ),
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => (
      <div className="h-[175px] pb-4 flex flex-col justify-center items-center">
        <span>First Name</span> <span>1200 unique values</span>
      </div>
    ),
  },
  {
    accessorKey: "age",
    header: () => (
      <div className="h-[175px] pb-4 flex flex-col justify-center items-center">
        <span>Age</span> <span> 1200 unique Values</span>
      </div>
    ),
  },
  {
    accessorKey: "visits",
    header: () => (
      <div className="h-[175px] pb-4 flex flex-col justify-center items-center">
        Visits
        <Barchart />
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="h-[175px] pb-4 flex flex-col justify-center items-center">
        Status
        <Piechart />
      </div>
    ),
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
  },
];

const PersonResult = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [data] = React.useState(() => makeData(1000));

  const table = useReactTable({
    data,
    columns: PersonColumns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { rows } = table.getRowModel();

  const parentRef = React.useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 34,
    overscan: 20,
  });

  return (
    <div ref={parentRef} className="editor__result overflow-auto">
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        <table className="w-full border rounded-md">
          <thead className="font-medium">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, idx) => {
                    return (
                      <th
                        scope="col"
                        key={header.id}
                        className={`px-4 py-3 border border-t-0 border-gray-500 sticky z-20 top-0 bg-green-100 
                          ${idx === 0 && "sticky left-0 z-30 bg-purple-100"}`}
                      >
                        <div>
                          {header.isPlaceholder ? null : (
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: " 🔼",
                                desc: " 🔽",
                              }[header.column.getIsSorted() as string] ?? null}
                            </div>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>

          <tbody className="bg-white text-xs">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="group">
                {row.getVisibleCells().map((cell, idx) => {
                  const { columnDef } = cell.column;
                  return (
                    <td
                      key={cell.id}
                      className={`px-4 py-1 whitespace-nowrap border border-gray-500 bg-white"
                        ${idx === 0 && "sticky left-0 z-10 bg-red-100"}`}
                    >
                      {flexRender(columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonResult;
