import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import styles from "./CoinList.module.scss";

import { Input, VirtualizedList } from "@/shared/ui";

import { tokenStore } from "@/entities/token";

export const CoinsList = observer(() => {
  const { coinsList, getRawData, getCoinsList } = tokenStore;

  useEffect(() => {
    getRawData().then(() => getCoinsList());
  }, [getCoinsList, getRawData]);

  const [filteredCoins, setFilteredCoins] = useState<string[]>([]);

  useEffect(() => {
    setFilteredCoins(coinsList);
  }, [coinsList]);

  const handleInputChange = (value: string) => {
    setFilteredCoins(
      coinsList.filter((coin) =>
        coin.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.root}>
      <Input
        placeholder="Search by coin"
        onChangeValue={handleInputChange}
        className={styles.pairInput}
      />
      <VirtualizedList
        list={filteredCoins}
        renderRow={({ index, style }) => {
          const coinName = filteredCoins[index];
          return (
            <Link href={`/${filteredCoins[index]}`}>
              <div style={style} className={styles.listItem}>
                <div className={styles.listItemContainer}>
                  <p className={styles.title}>{coinName}</p>
                </div>
              </div>
            </Link>
          );
        }}
      />
    </div>
  );
});
