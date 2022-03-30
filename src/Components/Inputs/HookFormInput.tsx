import FormInput from "./FormInput";
import WithHookFormController from "./WithHookFormController";
import { InputPropsType, InputControllerProps } from "./types";

const Input = WithHookFormController<InputPropsType & InputControllerProps>(
  FormInput,
);

export default Input;
