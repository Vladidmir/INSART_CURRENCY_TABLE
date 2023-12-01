import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrenciesData } from "./currencyAsyncActions";

import {
  CurrenciesSliceState,
  NewCurrencyData,
  ServerError,
} from "./currencySlice.types";

const initialState: CurrenciesSliceState = {
  currencies: [],
  forcedError: false,
  isLoading: false,
};

const currenciesSlice = createSlice({
  name: "@currenciesSlice",
  initialState,
  reducers: {
    changeCurrency(
      state: CurrenciesSliceState,
      action: PayloadAction<NewCurrencyData>
    ) {
      const { name, rate } = action.payload;

      return {
        ...state,
        currencies: state.currencies.map((currency) =>
          currency.name === name
            ? { ...currency, rate: Number(rate) }
            : currency
        ),
      };
    },
    setForsedServerError(
      state: CurrenciesSliceState,
      action: PayloadAction<ServerError>
    ) {
      state.forcedError = action.payload;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrenciesData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrenciesData.fulfilled, (state, action) => {
      const { nbuRatesData, btcRateData } = action.payload;

      if (Array.isArray(nbuRatesData) && btcRateData) {
        state.isLoading = false;

        state.currencies = [...nbuRatesData, btcRateData];
      } else {
        console.error(
          "Invalid payload structure for fetchCurrenciesData.fulfilled"
        );
      }
    });
    builder.addCase(fetchCurrenciesData.rejected, (state, action) => {
      console.error("Error fetching currency data:", action.error.message);
      state.currencies = [];
      state.isLoading = false;
    });
  },
});

export const { changeCurrency, setForsedServerError } = currenciesSlice.actions;
export default currenciesSlice.reducer;
