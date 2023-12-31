import { PropsWithTheme } from "../../types";
const MuiSelect = {
  styleOverrides: {
    root: ({ theme: { spacing } }: PropsWithTheme) => ({
      width: "80px",
      borderRadius: spacing(3),
    }),
  },
};

export default MuiSelect;
