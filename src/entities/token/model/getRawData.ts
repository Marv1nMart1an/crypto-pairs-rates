import { fetchData } from "@/shared/fetch";
import { TOKENS_ENDPOINT } from "./constants";
import { TRawData } from "./types";

export const getRawData = async () => {
  const response = await fetchData<TRawData>(TOKENS_ENDPOINT);
  return response;
};
