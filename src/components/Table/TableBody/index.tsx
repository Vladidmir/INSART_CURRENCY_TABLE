import React from "react";
import { useAppSelector } from "../../../store";

//components
import * as MUI from "@mui/material";
import { TableRow } from "../TableRow";
import { TableHead } from "../TableHead";
import { createTableWrapperStyles } from "./exchange.styles";
import { ErrorPage } from "../../pages/ErrorPage";

//selectors
import {
  selectCurrencies,
  selectForcedServerError,
} from "../../../store/slices/currenciesSlice/currencySelectors";
import { Currencies } from "../../../store/slices/currenciesSlice/currencySlice.types";

//styles
const TableWrapper = MUI.styled(MUI.Paper)(createTableWrapperStyles);
interface TableBodyProps {
  currencies: Currencies;
}
export const TableBody: React.FC<TableBodyProps> = ({ currencies }) => {
  const columns = ["Currency", "Rate, UAH"];

  return (
    <TableWrapper>
      <MUI.Table>
        <TableHead columns={columns} />
        <MUI.TableBody>
          {currencies.map((currency) => (
            <TableRow key={currency.name} currency={currency} />
          ))}
        </MUI.TableBody>
      </MUI.Table>
    </TableWrapper>
  );
};
