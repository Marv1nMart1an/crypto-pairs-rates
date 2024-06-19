import {  makeAutoObservable, runInAction } from "mobx";
import { getCoins } from "./getTokens";
import { TCoinInfo, TRawData } from "./types";
import { getAllPairs } from "./getAllPairs";
import { getPairsByCoin } from "./getPairsByToken";
import { getRawData } from "./getRawData";

class TokensStore {
  rawData: TRawData = {};
  coinsList: string[] = [];
  allPairList: TCoinInfo[] = [];
  isLoading = false;
  tokensListError = "";

  constructor() {
    makeAutoObservable(this);
    this.getRawData()
  }

  getRawData = async () => {
    try {
      this.isLoading = true;

      const data = await getRawData();

      runInAction(() => {
        this.isLoading = false;
        this.rawData = data;
      });

      this.isLoading = false;
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.isLoading = false;
          this.tokensListError = error.message;
        });
      }
      this.isLoading = false;
    }
  }

  getCoinsList = () => {
      const data = getCoins(this.rawData);

      runInAction(() => {
        this.isLoading = false;
        this.coinsList = data;
      });
      
      return data;
  }

  getPairsList = () => {
      const data =  getAllPairs(this.rawData);

      runInAction(() => {
        this.isLoading = false;
        this.allPairList = data;
      });

      return data;
  };

  getPair = (pairName: string) => {
    if(this?.allPairList.length === 0) {
      this.getPairsList()
    }
    const foundedPair = this.allPairList.find((pair) => pairName === pair.name);
    return foundedPair ?? null;
  }

  getCoinPairs = (coinName: string): TCoinInfo[] => {
    const coinPairs = getPairsByCoin(coinName, this.rawData);
    return coinPairs;
  }
}

export const tokenStore = new TokensStore();