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
import { Supplier, makeSuppliersData } from "./makedata";
import { useVirtualizer } from "@tanstack/react-virtual";

const SupplierColumns: ColumnDef<Supplier>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="pb-4 flex flex-col justify-center items-center">
        <span>Supplier Name</span> <span>100 unique values</span>
      </div>
    ),
    size: 60,
  },
  {
    accessorKey: "country",
    cell: (info) => info.getValue(),
    header: () => (
      <div className="pb-4 flex flex-col justify-center items-center">
        Country
      </div>
    ),
  },
  {
    accessorKey: "skus",
    cell: (info) => info.getValue(),
    header: () => (
      <div className="pb-4 flex flex-col justify-center items-center">
        <span>SKU's supported</span>
      </div>
    ),
  },
];

export const SuppliersResult = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [data] = React.useState(() => makeSuppliersData(1000));

  const table = useReactTable({
    data,
    columns: SupplierColumns,
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
