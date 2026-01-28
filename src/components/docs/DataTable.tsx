import { cn } from "@/lib/utils";

interface Column<T> {
  key: keyof T;
  header: string;
  className?: string;
}

interface DataTableProps<T extends Record<string, unknown>> {
  data: T[];
  columns: Column<T>[];
  caption?: string;
  striped?: boolean;
  className?: string;
}

function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  caption,
  striped = true,
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn("data-table-wrapper my-6 overflow-x-auto rounded-lg border border-border", className)}>
      <table className="w-full text-sm">
        {caption && (
          <caption className="py-3 px-4 text-left text-muted-foreground bg-muted/50 border-b border-border">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  "px-4 py-3 text-left font-semibold text-foreground",
                  column.className
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                "border-b border-border last:border-0 transition-colors hover:bg-muted/30",
                striped && rowIndex % 2 === 1 && "bg-muted/20"
              )}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={cn("px-4 py-3 text-foreground", column.className)}
                >
                  {String(row[column.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
