import { Msg } from '../pojo/msg';

export const SUPPORTED_EXCHANGES = [
  'Binance',
  'Bitfinex',
  'BitMEX',
  'Bitstamp',
  'CoinbasePro',
  'Huobi',
  'Kraken',
  'MXC',
  'Newdex',
  'OKEx',
  'WhaleEx',
] as const;

export type MsgCallback = (msg: Msg) => Promise<void>;
export async function defaultMsgCallback(msg: Msg): Promise<void> {
  console.dir(msg); // eslint-disable-line no-console
}
