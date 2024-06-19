export type TCoinInfo = {
  name: string;
  ask: number;
  bid: number;
  diff24h: number;
  rate: number;
};

export type TCoinRaw = {
  ask: number;
  bid: number;
  diff24h: number;
  rate: number;
};

export type TCoin = Record<string, TCoinRaw>;

export type TRawData = Record<string, TCoin>;
