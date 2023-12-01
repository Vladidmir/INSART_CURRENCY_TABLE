import { useEffect, useState, useMemo } from "react";
import { useAppSelector } from "../../../store";

//components
import { Button, Stack, styled } from "@mui/material";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import { SelectCurrency } from "../SelectCurrency";

//constnts
import { CurrencyNames } from "../../../constants/currencyTable";

//selectors
import { selectCurrencies } from "../../../store/slices/currenciesSlice/currencySelectors";
import { selectForcedServerError } from "../../../store/slices/currenciesSlice/currencySelectors";

//utils
import { roundTo } from "../../../utils";

//styles
import { createExchangeWrapperStyles } from "./exchange.styles";
const ExchangeWrapper = styled(Stack)(createExchangeWrapperStyles);

export const Exchange = () => {
  const [fromCurrency, setFromCurrency] = useState<CurrencyNames>(
    CurrencyNames.USD
  );
  const [fromAmount, setFromAmount] = useState<number>(0);
  const [toCurrency, setToCurrency] = useState<CurrencyNames>(
    CurrencyNames.UAH
  );
  const [toAmount, setToAmount] = useState<number>(0);

  const roundedToAmount = useMemo(() => roundTo(toAmount, 10), [toAmount]);
  const currencies = useAppSelector(selectCurrencies);
  const serverError = useAppSelector(selectForcedServerError);

  const swapCurrencies = () => {
    const savedFromCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(savedFromCurrency);
  };

  const getCurrencyRate = useMemo(() => {
    return (currName: string) => {
      const currentCurrency = currencies.find((curr) => curr.name === currName);
      return currentCurrency?.rate || 1;
    };
  }, [currencies]);

  useEffect(() => {
    const amount =
      (getCurrencyRate(fromCurrency) / getCurrencyRate(toCurrency)) *
      fromAmount;
    setToAmount(amount);
  }, [fromCurrency, toCurrency, fromAmount, getCurrencyRate]);

  return (
    <ExchangeWrapper>
      <SelectCurrency
        label="Change"
        amount={fromAmount ? fromAmount : ""}
        currency={fromCurrency}
        onCurrencyChange={setFromCurrency}
        onAmountChange={setFromAmount}
        isDisabled={serverError}
      />

      <Button data-testid="swapButton" onClick={swapCurrencies}>
        <SwapHorizRoundedIcon />
      </Button>

      <SelectCurrency
        label="Get"
        amount={roundedToAmount}
        currency={toCurrency}
        onCurrencyChange={setToCurrency}
        onAmountChange={setToAmount}
        isDisabled
      />
    </ExchangeWrapper>
  );
};
