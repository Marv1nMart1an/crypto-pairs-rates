import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

import styles from "./PairsList.module.scss";
import { PairHeaderItem } from "./PairHeaderItem";

import { VirtualizedList, Input } from "@/shared/ui";
import { TCoinInfo } from "@/entities/token";

const formatValue = (value: number) =>
  value < 0.01 ? "~ 0.01" : value.toFixed(2);

export const PairsList = ({ pairs }: { pairs: TCoinInfo[] }) => {
  const [filteredPairs, setFilteredPairs] = useState<TCoinInfo[]>([]);
  const [sortedData, setSortedData] = useState<TCoinInfo[]>([]);

  useEffect(() => {
    if (pairs) {
      setFilteredPairs(pairs);
    }
  }, [pairs]);

  const handleInputChange = useCallback(
    (value: string) => {
      setFilteredPairs(
        pairs.filter((pair) =>
          pair.name.toLowerCase().includes(value.toLowerCase())
        )
      );
      setSortedData([]);
    },
    [pairs]
  );

  const resultList = useMemo(
    () => (sortedData.length === 0 ? filteredPairs : sortedData),
    [filteredPairs, sortedData]
  );

  return (
    <div className={styles.root}>
      <Input
        placeholder="Search by coin"
        onChangeValue={handleInputChange}
        className={styles.pairInput}
      />
      <div className={styles.listHeaderCntainer}>
        <p className={styles.title}>Pair name</p>
        <PairHeaderItem
          data={filteredPairs}
          setData={setSortedData}
          param="diff24h"
        />
        <PairHeaderItem
          data={filteredPairs}
          setData={setSortedData}
          param="bid"
        />
        <PairHeaderItem
          data={filteredPairs}
          setData={setSortedData}
          param="ask"
        />
        <PairHeaderItem
          data={filteredPairs}
          setData={setSortedData}
          param="rate"
        />
      </div>
      <VirtualizedList
        list={resultList}
        renderRow={({ index, style }) => {
          const { name, diff24h, ask, bid, rate } = resultList[index];
          return (
            <Link href={`/pair/${name}`}>
              <div key={index} style={style} className={styles.listItem}>
                <div className={styles.listItemContainer}>
                  <p className={styles.title}>{name}</p>
                  <p className={styles.value}>{formatValue(diff24h)}</p>
                  <p className={styles.value}>{formatValue(bid)}</p>
                  <p className={styles.value}>{formatValue(ask)}</p>
                  <p className={styles.value}>{formatValue(rate)}</p>
                </div>
              </div>
            </Link>
          );
        }}
      />
    </div>
  );
};
