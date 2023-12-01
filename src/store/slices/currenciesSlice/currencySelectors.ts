import { RootState } from "../../index";
import { createSelector } from "@reduxjs/toolkit";

export const selectCurrenciesSlice = (state: RootState) => state.currencies;

export const selectCurrencies = createSelector(
  [selectCurrenciesSlice],
  (currenciesSlice) => currenciesSlice.currencies
);

export const selectForcedServerError = createSelector(
  [selectCurrenciesSlice],
  (currenciesSlice) => currenciesSlice.forcedError
);
