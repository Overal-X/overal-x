interface TableHeader {
  title: string;
  className?: string;
  colSpan?: number;
}

type DataKey<D> = keyof D;

export interface TableProps<D = any> {
  tableHeaders: TableHeader[];
  tableActions?: ((data: D) => JSX.Element)[];
  tableKeys: DataKey<D>[];
  tableData: D[] | undefined;
}
