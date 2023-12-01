import { PropsWithTheme } from "../../types";

const MuiPaper = {
  styleOverrides: {
    root: ({ theme: { spacing } }: PropsWithTheme) => ({
      borderRadius: spacing(2),
    }),
  },
};

export default MuiPaper;
