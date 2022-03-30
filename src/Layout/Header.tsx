import { Flex } from "components/Containers";
import { HeaderWrapper } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Flex align="center" justify="center" height="100%" fullWidth>
        <p>App header</p>
      </Flex>
    </HeaderWrapper>
  );
}
