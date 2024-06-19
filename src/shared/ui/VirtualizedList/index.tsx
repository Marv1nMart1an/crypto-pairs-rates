import { ReactNode, CSSProperties } from "react";
import { FixedSizeList } from "react-window";

type TRenderRow = ({
  index,
  style,
}: {
  index: number;
  style: CSSProperties;
}) => ReactNode;

type TPops<T> = { list: T[]; renderRow: TRenderRow };

export const VirtualizedList = <T,>({ list, renderRow }: TPops<T>) => (
  <FixedSizeList
    height={715}
    width={666}
    itemCount={list?.length}
    itemSize={40}
  >
    {renderRow}
  </FixedSizeList>
);
