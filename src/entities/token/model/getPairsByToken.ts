import { TCoinInfo, TRawData } from "./types";
import { toNumber } from "@/shared/lib/toNumber";

export const getPairsByCoin: (coinName: string, rawData: TRawData) => TCoinInfo[] = (
  coinName: string,
  rawData: TRawData
) => {
  const coinPairs = rawData[coinName];
  const coinsPairsKeys = Object.keys(coinPairs || {});

  const allPairs = coinsPairsKeys.map((key) => {
    const pair = coinPairs[key];

    return {
      name: `${coinName}-${key}`,
      bid: toNumber(pair.bid),
      ask: toNumber(pair.ask),
      diff24h: toNumber(pair.ask),
      rate: toNumber(pair.rate),
    };
  });

  return allPairs;
};
