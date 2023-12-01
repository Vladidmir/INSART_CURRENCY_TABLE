import { StyleFunction } from "../../../types";
import { Props } from ".";

const createButtonWrapperStyles: StyleFunction<Props> = ({ mode }) => {
  const size = mode === "option" ? "16px" : "32px";
  const svgSize = mode === "option" ? "12px" : "24px";

  return {
    width: size,
    height: size,

    svg: {
      width: svgSize,
      height: svgSize,
    },
  };
};

export { createButtonWrapperStyles };
