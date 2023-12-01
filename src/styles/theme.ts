import { createTheme, ThemeOptions } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import MuiButton from "./MuiComponents/MuiButton";
import MuiCssBaseline from "./MuiComponents/MuiCssBaseline";
import MuiPaper from "./MuiComponents/MuiPaper";
import MuiSelect from "./MuiComponents/MuiSelect";
import MuiTableCell from "./MuiComponents/MuiTableCell";
import MuiTextField from "./MuiComponents/MuiTexfield";

const palette = {
  primary: {
    light: grey[200],
    main: grey[800],
    dark: grey[600],
    contrastText: "#fff",
  },
  secondary: {
    light: blueGrey[300],
    main: blueGrey[500],
    dark: blueGrey[700],
    contrastText: "#fff",
  },
};

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
    MuiPaper,
    MuiTableCell,
    MuiButton,
    MuiSelect,
    MuiTextField,
  },
} as ThemeOptions);

export default theme;
