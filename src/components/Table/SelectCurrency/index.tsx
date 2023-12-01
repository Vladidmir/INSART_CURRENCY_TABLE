import { ChangeEvent } from "react";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";

import { CurrencyNames } from "../../../constants/currencyTable";
import { AnyFunction } from "../../../types";

interface SelectCurrencyProps {
  currency: CurrencyNames;
  amount: number | string;
  onCurrencyChange: AnyFunction;
  onAmountChange: AnyFunction;
  label?: string;
  isDisabled?: boolean;
}

const currencyNames = Object.values(CurrencyNames);

export const SelectCurrency = ({
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  label = "",
  isDisabled = false,
}: SelectCurrencyProps) => {
  const onAmountChangeHandler = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    onAmountChange(numericValue);
  };
  const onCurrencyChangeHandler = ({
    target: { value },
  }: SelectChangeEvent<CurrencyNames>) => onCurrencyChange(value);

  return (
    <Stack spacing={1} direction="row">
      <TextField
        value={amount}
        onChange={onAmountChangeHandler}
        placeholder="0"
        label={label}
        size="small"
        disabled={isDisabled}
      />

      <Select value={currency} size="small" onChange={onCurrencyChangeHandler}>
        {currencyNames.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};
