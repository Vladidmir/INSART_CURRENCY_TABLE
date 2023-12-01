import { useAppSelector } from "../../../store";
import { selectCurrencies } from "../../../store/slices/currenciesSlice/currencySelectors";
import { Exchange, TableBody } from "../../Table";

export const MainPage = () => {
  const currencies = useAppSelector(selectCurrencies);
  return (
    <>
      <TableBody currencies={currencies} />
      <Exchange />
    </>
  );
};
