import { ReactNode } from "react";

import { TableProps } from "./table.interface";

function Table<D>({
  tableHeaders,
  tableActions,
  tableKeys,
  tableData,
}: TableProps<D>) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-[#ddd]">
        <thead className="bg-admin-primary text-white capitalize border-b border-[#555]">
          <tr className="w-full flex justify-between items-center">
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                scope="col"
                className={`w-full px-4 py-2 font-medium ${
                  header?.className || ""
                }`}
                colSpan={header?.colSpan || 1}
              >
                {header.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData?.map((data, index) => (
            <tr
              className="w-fulf border-b border-[#555] flex justify-between items-center"
              key={index}
            >
              {/* table actions */}
              {tableActions && (
                <td
                  scope="row"
                  className="w-full flex items-center px-6 py-2 font-medium space-x-2 whitespace-nowrap"
                >
                  {tableActions.map((action, index) => (
                    <span key={index}>{action(data)}</span>
                  ))}
                </td>
              )}

              {tableKeys.map((key, index) => (
                <td
                  scope="row"
                  className={`w-full px-6 py-2 font-medium text-dark-900 line-clamp-1 whitespace-nowrap`}
                  key={index}
                >
                  {data[key] as ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
