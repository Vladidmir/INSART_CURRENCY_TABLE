import { StyleFunction } from "../../types";
const createFooterWrapperStyles: StyleFunction = ({ theme: { spacing } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing(1),

  width: "100%",
  height: "100px",
  padding: spacing(2),

  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "0px",

  zIndex: 1,
});

export { createFooterWrapperStyles };
