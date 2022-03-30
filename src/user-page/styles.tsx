import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button as MuiButton } from "@mui/material";
import { Property } from "csstype";

export const Title = styled.h2`
  font-size: 20px;
  color: #444;
  font-weight: 600;
`;

type SubtitleProps = {
  weight?: Property.FontWeight;
};

export const Subtitle = styled("span")<SubtitleProps>`
  font-size: 16px;
  color: #444;
  font-weight: 400;
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}
`;

export const Anchor = styled.a`
  font-size: 16px;
  color: #444;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`;

export const Wrapper = styled.form`
  label: user-form-wrapper;
  width: 100%;
  height: 80vh;
  padding: 64px;
`;

export const Button = styled(MuiButton)`
  flex: 1;
`;
