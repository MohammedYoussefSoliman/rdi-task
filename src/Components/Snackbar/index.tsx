import React, { memo } from "react";
import { Snackbar as MaterialSnackbar, SnackbarOrigin } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { Flex } from "components/Containers";
import colors from "helpers/colors";
import { IconButton, Container } from "./styles";

interface SnackbarProps {
  message: string | null;
  anchorOrigin?: SnackbarOrigin;
  duration?: number | null;
  status?: "success" | "failure" | "info";
  onClose?: () => void;
  unsubscribe?: () => void;
}

const StyledSnackbar = styled(MaterialSnackbar)({
  width: "60%",
});

export default memo(function Snackbar({
  message,
  anchorOrigin,
  duration,
  status = "info",
  onClose,
  unsubscribe,
}: SnackbarProps) {
  const [open, setOpen] = React.useState<boolean>(Boolean(message) || false);

  React.useEffect(() => {
    if (message) setOpen(Boolean(message));
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [message, unsubscribe]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
    if (unsubscribe) unsubscribe();
  };

  return (
    <StyledSnackbar
      key={message}
      anchorOrigin={
        anchorOrigin || {
          vertical: "top",
          horizontal: "center",
        }
      }
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
    >
      <Flex gap="1.2rem" width="100%" align="center">
        <Container status={status}>
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={handleClose}
            disableRipple
            disableFocusRipple
          >
            <CloseIcon htmlColor={colors.white} />
          </IconButton>
          <Flex justify="center" align="center" flex={1}>
            <p className="message--text">{message}</p>
          </Flex>
        </Container>
      </Flex>
    </StyledSnackbar>
  );
});
