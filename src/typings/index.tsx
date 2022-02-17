export interface ReduxStore {
  crypto: {
    data: Crypto[];
    loading: boolean;
    pagination: number;
    crypto_social_status: CryptoSocialStatus;
    coin_top_markets: CryptoTopTenMarkets[];
    coin_details: Crypto[];
  };
}

export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  market_cap_usd: string;
  volume24: string;
  volume24_native: string;
  csupply: string;
  price_btc: string;
  tsupply: string;
  msupply: string;
}

export interface CryptoStats {
  reddit: Reddit;
  twitter: Twitter;
}

export interface CryptoSocialStatus {
  reddit: Reddit;
  twitter: Twitter;
}

export interface Reddit {
  avg_active_users: number;
  subscribers: number;
}

export interface Twitter {
  followers_count: number;
  status_count: number;
}

export interface CryptoTopTenMarkets {
  name: string;
  base: string;
  quote: string;
  price: number;
  price_usd: number;
  volume: number;
  volume_usd: number;
  time: number;
}
