import { TCoinInfo, TRawData } from "./types";
import { toNumber } from "@/shared/lib/toNumber";

export const getAllPairs: (rawData: TRawData) => TCoinInfo[] = (rawData) => {
    const topKeys = Object.keys(rawData);
  
    const allPairs = topKeys.map((firstKey) => {
      const firstToken = rawData[firstKey];
  
      const bottomKeys = Object.keys(firstToken);
  
      return bottomKeys.map((secondKey) => {
        const pair = rawData[firstKey][secondKey];
        
        return {
          name: `${firstKey}-${secondKey}`,
          bid: toNumber(pair.bid),
          ask: toNumber(pair.ask),
          diff24h: toNumber(pair.ask),
          rate: toNumber(pair.rate),
        };
      });
    });
  
    return allPairs.flat(2);
  };