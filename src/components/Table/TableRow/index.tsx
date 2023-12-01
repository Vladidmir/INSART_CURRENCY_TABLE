import React, { memo } from "react";

//components
import * as MUI from "@mui/material";
import { EditableCell } from "../EditableCell";
import { Currencies } from "../../../store/slices/currenciesSlice/currencySlice.types";

interface TableRowProps {
  currency: Currencies[number];
}

export const TableRow: React.FC<TableRowProps> = memo(({ currency }) => (
  <MUI.TableRow key={currency.name}>
    <MUI.TableCell>{currency.name}</MUI.TableCell>
    <EditableCell currency={currency} />
  </MUI.TableRow>
));
