import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors from "helpers/colors";
import devices from "helpers/devices";

import { Property } from "csstype";

type InputWrapperProps = {
  variant?: "outlined" | "filled";
  width?: Property.Width;
  error?: boolean;
};

type InputProps = {
  variant?: "outlined" | "filled";
};

export const Wrapper = styled("div")<InputWrapperProps>`
  border-radius: 20px;
  padding: 16px;
  min-width: 320px;
  outline: none;
  ${({ variant }) =>
    variant === "filled"
      ? css`
          border: 1px solid ${colors.primary[200]};
          background: ${colors.primary[300]};
        `
      : css`
          border: 1px solid ${colors.primary[300]};
        `}
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${colors.error[300]}; ;
    `}
    &:focus-within {
    outline: 2px solid ${colors.primary[300]};
  }
  ${devices.medium} {
    border-radius: 16px;
    padding: 20px 24px;
    min-width: 300px;
  }
  ${devices.small} {
    border-radius: 16px;
    padding: 20px 24px;
    min-width: 290px;
  }
  ${devices.xSmall} {
    border-radius: 11px;
    padding: 16px 20px;
  }
`;

export const Input = styled("input")<InputProps>`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: ${colors.white};
  ${({ variant }) =>
    variant === "filled"
      ? css`
          color: ${colors.white};
        `
      : css`
          color: ${colors.primary[300]};
        `}
  font-size: 16px;
  font-weight: 400;
  ${devices.medium} {
    font-size: 16px;
  }
  ${devices.small} {
    font-size: 13px;
  }
`;

export const ErrorText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.error[300]};
`;
