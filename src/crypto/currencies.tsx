import { Icon } from "@mui/material";
import { CryptoCurrency } from "./types";

export const currencies: CryptoCurrency[] = [
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: <Icon component="img" src="/icons/doge.svg" alt="Dogecoin" />,
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: <Icon component="img" src="/icons/btc.svg" alt="Bitcoin" />,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: <Icon component="img" src="/icons/eth.svg" alt="Ethereum" />,
  },
  {
    symbol: "XRP",
    name: "XRP",
    icon: <Icon component="img" src="/icons/xrp.svg" alt="XRP" />,
  },
  {
    symbol: "LTC",
    name: "Litecoin",
    icon: <Icon component="img" src="/icons/litecoin.svg" alt="Litecoin" />,
  },
];
