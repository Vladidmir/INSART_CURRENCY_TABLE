import { ChangeEvent } from "react";
import { Stack, styled, TextField } from "@mui/material";

//components
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Button } from "../../ui";
import { EditFieldProps } from "./EditField.props";

//styles
import { createFieldStyles } from "./editField.styles";
const Field = styled(TextField)(createFieldStyles);

export const EditField = ({
  value,
  onChange,
  onCancel,
  onSave,
  disabled,
}: EditFieldProps) => {
  const onChangeHandler = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => onChange(value);

  return (
    <>
      <Field size="small" value={value} onChange={onChangeHandler} />

      <Stack direction="column" spacing="4px">
        <Button
          mode="option"
          title="Save"
          color="success"
          onClick={onSave}
          disabled={disabled}
        >
          <SaveRoundedIcon />
        </Button>

        <Button mode="option" title="Cancel" color="error" onClick={onCancel}>
          <CancelRoundedIcon />
        </Button>
      </Stack>
    </>
  );
};
