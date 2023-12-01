import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

//components
import { MainLayout, ErrorPage, Loader, MainPage } from "../index";

//actions
import { fetchCurrenciesData } from "../../store/slices/currenciesSlice/currencyAsyncActions";

//selectors
import { selectForcedServerError } from "../../store/slices/currenciesSlice/currencySelectors";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrenciesData());
  }, []);

  const serverError = useAppSelector(selectForcedServerError);
  const loading = useAppSelector((state) => state.currencies.isLoading);
  return (
    <MainLayout>
      {loading ? <Loader /> : serverError ? <ErrorPage /> : <MainPage />}
    </MainLayout>
  );
};
