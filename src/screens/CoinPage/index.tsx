import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import styles from "./CoinPage.module.scss";

import { useQueryParam, QUERY } from "@/shared/lib/useQueryParam";

import { TCoinInfo } from "@/entities/token";
import { tokenStore } from "@/entities/token";

import { PairsList } from "@/widgets/PairList";

export const CoinPage = observer(() => {
  const currentCoin = useQueryParam(QUERY.COIN);
  const { getCoinPairs, rawData } = tokenStore;
  const [coinPairs, setCoinPairs] = useState<TCoinInfo[]>([]);

  useEffect(() => {
    setCoinPairs(currentCoin ? getCoinPairs(currentCoin) : []);
  }, [rawData, currentCoin, getCoinPairs]);

  return (
    <div className={styles.root}>
      <h2>{currentCoin?.toUpperCase()}</h2>
      <PairsList pairs={coinPairs} />
    </div>
  );
});
