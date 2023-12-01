import { Currency } from "../store/slices/currenciesSlice/currencySlice.types";
import { NBURate } from "../types";

const createRateFromNBUData = ({ cc, rate }: NBURate): Currency => ({
  name: cc,
  rate,
});

const isValueValid = (value: string, initialRate: number): boolean =>
  Number(value) <= initialRate * 1.1 && Number(value) >= initialRate * 0.9;

const getErrorCounterValue = (): number => {
  return Number(localStorage.getItem("errorCounter")) || 0;
};

const roundTo = (value: number, amountAfterPoint: number = 2): number =>
  Number(value.toFixed(amountAfterPoint));

export { createRateFromNBUData, isValueValid, getErrorCounterValue, roundTo };
