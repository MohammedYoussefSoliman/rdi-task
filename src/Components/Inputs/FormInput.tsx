import React from "react";
import { Flex } from "components/Containers";
import { Input, Wrapper } from "./styles";
import { InputPropsType } from "./types";
import InputError from "./InputError";

export default React.memo(function FormInput({
  name,
  variant = "filled",
  prefixComponent,
  suffixComponent,
  width,
  error,
  ...InputProps
}: InputPropsType) {
  return (
    <Flex direction="column" gap="4px">
      <Wrapper variant={variant} width={width} error={!!error}>
        <Flex gap="8px" align="center" justify="space-between" fullWidth>
          {prefixComponent && prefixComponent}
          <Input {...InputProps} />
          {suffixComponent && suffixComponent}
        </Flex>
      </Wrapper>
      {error && <InputError error={error} />}
    </Flex>
  );
});
