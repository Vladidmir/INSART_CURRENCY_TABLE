import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { App } from "./components";
import { store, persistor } from "./store";
import theme from "./styles/theme";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
);
