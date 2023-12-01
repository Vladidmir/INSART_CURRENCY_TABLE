import { ReactNode } from "react";
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  styled,
  Tooltip,
} from "@mui/material";

import { AnyFunction } from "../../../types";

import { createButtonWrapperStyles } from "./button.styles";
const ButtonWrapper = styled(MUIButton)(createButtonWrapperStyles);

interface CustomProps {
  title?: string;
  id?: string;
  onClick: AnyFunction;
  children?: ReactNode;
  mode?: "default" | "option";
}

export type Props = CustomProps & MUIButtonProps;

export const Button = ({
  title = "",
  id = "",
  onClick,
  children,
  mode,
  ...props
}: Props) => {
  return (
    <Tooltip title={title} placement="top" followCursor>
      <ButtonWrapper
        mode="option"
        id={id}
        variant="contained"
        onClick={onClick}
        {...props}
      >
        {children}
      </ButtonWrapper>
    </Tooltip>
  );
};
