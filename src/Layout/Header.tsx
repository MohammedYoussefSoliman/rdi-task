import { Flex } from "components/Containers";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { HeaderWrapper } from "./styles";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Flex align="center" justify="center" height="100%" fullWidth>
        <Button variant="contained" onClick={() => navigate("/new-user")}>
          Add new user
        </Button>
      </Flex>
    </HeaderWrapper>
  );
}
