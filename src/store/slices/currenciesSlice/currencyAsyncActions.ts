import { createAsyncThunk } from "@reduxjs/toolkit";

//constants
import { CurrencyNames } from "../../../constants/currencyTable";

//actions
import { setForsedServerError } from ".";

//mockData
import { btcMock } from "../../../utils/mockData";

//types
import { NBURate } from "../../../types";
import { NewCurrencyData } from "./currencySlice.types";

//utils

import { createRateFromNBUData, getErrorCounterValue } from "../../../utils";

const URL_NBU =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

const currencyNames = Object.values(CurrencyNames);

export const fetchCurrenciesData = createAsyncThunk(
  "@currenciesSlice/fetchCurrenciesData",
  async (_, { dispatch }) => {
    try {
      const errorCounterValue = getErrorCounterValue();

      if (errorCounterValue === 5) {
        throw new Error("Oops! Intentional error for testing.");
      }

      const nbuResponse = await fetch(URL_NBU);

      if (!nbuResponse.ok) {
        throw new Error(
          `Failed to fetch currency data. Status: ${nbuResponse.status}`
        );
      }

      const nbuData = await nbuResponse.json();

      const nbuRatesData = await Promise.all(
        nbuData
          .filter((curr: NBURate) => currencyNames.includes(curr.cc))
          .map((nbuRate: NBURate) => createRateFromNBUData(nbuRate))
      );

      const btcRateData = await new Promise<NewCurrencyData>((resolve) => {
        setTimeout(() => {
          resolve(btcMock);
        }, 300);
      });

      dispatch(setForsedServerError(false));

      return { nbuRatesData, btcRateData };
    } catch (error) {
      console.error("Error fetching currency data:", error);

      dispatch(setForsedServerError(true));

      throw error;
    } finally {
      const currentCounterValue = getErrorCounterValue() || 0;
      const newCounterValue = (currentCounterValue % 5) + 1;
      localStorage.setItem("errorCounter", String(newCounterValue));
    }
  }
);
