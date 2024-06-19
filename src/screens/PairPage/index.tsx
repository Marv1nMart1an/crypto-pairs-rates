import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import styles from "./PairPage.module.scss";

import { useQueryParam, QUERY } from "@/shared/lib";

import { tokenStore, TCoinInfo } from "@/entities/token";

export const PairPage = observer(() => {
  const { getPair, rawData } = tokenStore;
  const currentPair = useQueryParam(QUERY.PAIR);

  const [pair, setPair] = useState<TCoinInfo | null>(null);

  useEffect(() => {
    setPair(currentPair ? getPair(currentPair) : null);
  }, [rawData, currentPair, getPair]);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{pair?.name}</h2>
      <div className={styles.valuesContainer}>
        <p>
          ASK: <br /> {pair?.ask ?? 0}
        </p>
        <p>
          BID: <br /> {pair?.bid ?? 0}
        </p>
        <p>
          24 change: <br /> {pair?.diff24h ?? 0}
        </p>
        <p>
          Rate: <br />
          {pair?.rate ?? 0}
        </p>
      </div>
    </div>
  );
});
