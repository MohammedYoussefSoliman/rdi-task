import React from "react";
import { Flex } from "components/Containers";
import { ErrorText } from "./styles";

type InputErrorProps = {
  error: string;
};

export default function InputError({ error }: InputErrorProps) {
  return (
    <Flex align="center" gap="8px">
      <ErrorText>{error}</ErrorText>
    </Flex>
  );
}
