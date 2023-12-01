import { CurrencyNames } from "../../../constants/currencyTable";

export interface Currency {
  name: CurrencyNames;
  initialRate?: number;
  rate: number;
}

export type ServerError = boolean;

export interface NewCurrencyData {
  name: CurrencyNames;
  rate: number;
}

export type Currencies = Currency[];

export type CurrenciesSliceState = {
  currencies: Currencies;
  forcedError: boolean;
  isLoading: boolean;
};
