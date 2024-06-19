import { Dispatch, SetStateAction, useCallback, useState } from "react";

import styles from "./PairsList.module.scss";
import { TCoinInfo } from "@/entities/token";

type TParam = "rate" | "ask" | "bid" | "diff24h";
type TOrder = "asc" | "desc" | "default";

export const PairHeaderItem = ({
  data,
  setData,
  param,
}: {
  data: TCoinInfo[];
  setData: Dispatch<SetStateAction<TCoinInfo[]>>;
  param: TParam;
}) => {
  const [currentSort, setCurrentSort] = useState<TOrder>("default");

  const MAP_SORT_TO_NEXT: Record<TOrder, TOrder> = {
    asc: "desc",
    desc: "default",
    default: "asc",
  };

  const MAP_SORT_TO_SYMBOL: Record<TOrder, string> = {
    asc: "↑",
    desc: "↓",
    default: "+",
  };

  const onSortClick = useCallback(
    (order: TOrder) => {
      let sortedData: TCoinInfo[] = [];

      if (order === "asc") {
        sortedData = [...data].sort((a, b) => a[param] - b[param]);
      } else if (order === "desc") {
        sortedData = [...data].sort((a, b) => b[param] - a[param]);
      } else {
        sortedData = [...data];
      }

      setData(sortedData);
    },
    [data, param, setData]
  );

  return (
    <div className={styles.headerItem}>
      <p
        className={styles.value}
        onClick={() => {
          const currentOrder = MAP_SORT_TO_NEXT[currentSort];
          onSortClick(currentOrder);
          setCurrentSort(currentOrder);
        }}
      >
        {param} {MAP_SORT_TO_SYMBOL[currentSort]}
      </p>
    </div>
  );
};
