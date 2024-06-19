import { useRouter } from "next/router";

export enum QUERY {
    COIN = 'coin',
    PAIR = 'pair',
}

export const useQueryParam = (param: QUERY): string | null => {
  const { query } = useRouter();

  if (query[param]) {
    return String(query[param]);
  }
  
  return null;
};
