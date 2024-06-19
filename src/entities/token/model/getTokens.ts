import { TRawData } from "./types";

export const getCoins = (rawData: TRawData) => {
  return Object.keys(rawData);
}

