import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors from "helpers/colors";
import { IconButton as MuiIconButton } from "@mui/material";

export const IconButton = styled(MuiIconButton)`
  padding: 8px;
`;

interface ContainerProps {
  status: "success" | "failure" | "info";
}

export const Container = styled("div")<ContainerProps>`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  border-radius: 15px;
  padding: 0.6rem;
  background: ${colors.primary[300]};
  box-shadow: 0 20px 50px 0 rgba(83, 38, 29, 0.06);
  ${({ status }) =>
    status === "success"
      ? css`
          background: ${colors.success[300]};
          border: none;
        `
      : css`
          background: ${colors.error[300]};
          border: none;
        `};
  .message--text {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.primary[100]};
    ${({ status }) =>
      status === "success"
        ? css`
            color: ${colors.success[100]};
          `
        : css`
            color: ${colors.error[100]};
          `};
  }
`;
