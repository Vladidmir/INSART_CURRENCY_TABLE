import { AnyFunction } from "../../../types";

export interface EditFieldProps {
  value: string;
  onChange: AnyFunction;
  onCancel: AnyFunction;
  onSave: AnyFunction;
  disabled?: boolean;
}
