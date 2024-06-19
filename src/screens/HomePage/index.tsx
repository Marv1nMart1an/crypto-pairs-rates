import { ReactNode, useState } from "react";

import styles from "./HomePage.module.scss";

import { tokenStore } from "@/entities/token";

import { CoinsList } from "@/widgets/CoinsList";
import { PairsList } from "@/widgets/PairList";

enum Tab {
  PAIRS = "pairs",
  COINS = "coins",
}

export const HomePage = () => {
  const { getPairsList } = tokenStore;
  const [tab, setTab] = useState<Tab>(Tab.COINS);
  const isActiveTab = (selectionTab: Tab) => tab === selectionTab;

  const MAP_TAB_TO_PAGE: Record<Tab, ReactNode> = {
    [Tab.PAIRS]: <PairsList pairs={getPairsList()} />,
    [Tab.COINS]: <CoinsList />,
  };

  return (
    <div className={styles.root}>
      <div className={styles.tabs}>
        <button
          onClick={() => setTab(Tab.COINS)}
          className={isActiveTab(Tab.COINS) ? styles.activeTab : ""}
        >
          Coins
        </button>
        <button
          onClick={() => setTab(Tab.PAIRS)}
          className={isActiveTab(Tab.PAIRS) ? styles.activeTab : ""}
        >
          All pairs
        </button>
      </div>
      {MAP_TAB_TO_PAGE[tab]}
    </div>
  );
};
