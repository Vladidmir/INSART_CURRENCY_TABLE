import { Currency } from "../store/slices/currenciesSlice/currencySlice.types";
import { CurrencyNames } from "../constants/currencyTable";

export const btcMock: Currency = {
  name: CurrencyNames.BTC,
  initialRate: 941785.81,
  rate: 941785.81,
};

const mockedCurrencies = [
  {
    name: "USD",
    initialRate: 36.5686,
    rate: 36.5686,
  },
  {
    name: "EUR",
    initialRate: 38.8377,
    rate: 38.8377,
  },
  {
    name: "PLN",
    initialRate: 8.1274,
    rate: 8.1274,
  },
  {
    name: "BTC",
    initialRate: 941785.81,
    rate: 941785.81,
  },
];

export { mockedCurrencies };
