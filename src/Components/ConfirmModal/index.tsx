import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { DialogProps } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

interface ConfirmModalType extends DialogProps {
  open: boolean;
  title: string;
  message: string;
  confirmText?: string;
  closeText?: string;
  loading?: boolean;
  handleConfirm: () => void;
  onClose: () => void;
}

export default function ConfirmModal(props: ConfirmModalType) {
  const {
    title,
    message,
    closeText,
    confirmText,
    onClose,
    loading,
    handleConfirm,
    ...dialogProps
  } = props;

  return (
    <Dialog onClose={onClose} {...dialogProps}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText component="div">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          {closeText || "Cancel"}
        </Button>
        <Button disabled={loading} onClick={handleConfirm} color="secondary">
          {loading ? "sending..." : confirmText || "Confirm"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
