import HookFormInput from "../HookFormInput";
import { InputPropsType, InputControllerProps } from "../types";

// Export customized inputs based on react-hook-form

type TextInputProps = InputControllerProps & InputPropsType;

export default function TextInput({ control, ...props }: TextInputProps) {
  return <HookFormInput control={control} type="text" {...props} />;
}
