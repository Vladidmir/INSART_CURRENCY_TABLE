import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";

import currenciesReducer from "./slices/currenciesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  currencies: currenciesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["@currencies/fetchCurrenciesData", PERSIST],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
