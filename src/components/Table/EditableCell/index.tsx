import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store";

//components
import { Stack, TableCell } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { EditField } from "../index";
import { Button } from "../../ui";

//actions
import { changeCurrency } from "../../../store/slices/currenciesSlice";

//types
import { Currency } from "../../../store/slices/currenciesSlice/currencySlice.types";

//utils
import { isValueValid } from "../../../utils";

interface Props {
  currency: Currency;
}

export const EditableCell = ({
  currency: { name, initialRate, rate },
}: Props) => {
  const [value, valueSet] = useState<string>(String(rate));
  const [isEditMode, isEditModeSet] = useState<boolean>(false);
  const [isValid, isValidSet] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const onCancel = () => {
    valueSet(String(rate));
    isEditModeSet(false);
  };

  const onSave = () => {
    dispatch(changeCurrency({ name, rate: Number(value) }));
    isEditModeSet(false);
  };

  const valueProcessAndSet = (value: string) => {
    const newValue = value.match(/^\d*\.?\d*$/);

    if (newValue) valueSet(newValue[0]);
  };

  useEffect(() => {
    if (isValueValid(value, initialRate ?? 0)) {
      isValidSet(true);
      return;
    }

    isValidSet(false);
  }, [value]);

  return (
    <TableCell>
      <Stack width="100%" alignItems="start">
        <Stack
          spacing={1}
          minWidth="100px"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {isEditMode ? (
            <EditField
              value={value}
              onChange={valueProcessAndSet}
              onCancel={onCancel}
              onSave={onSave}
              disabled={!isValid}
            />
          ) : (
            <span>{rate}</span>
          )}

          {!isEditMode && (
            <Button
              id="editButton"
              title="Edit"
              onClick={() => isEditModeSet(true)}
            >
              <EditRoundedIcon />
            </Button>
          )}
        </Stack>
      </Stack>
    </TableCell>
  );
};
