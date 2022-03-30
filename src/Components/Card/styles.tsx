import styled from "@emotion/styled";
import { Button as MuiButton } from "@mui/material";
import colors from "helpers/colors";
import { Property } from "csstype";
import { css } from "@emotion/react";

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

export const Wrapper = styled.div`
  label: user-card;
  border: 1px solid ${colors.primary[300]};
  border-radius: 20px;
  padding: 20px 14px;
  background: ${colors.white};
  &:hover {
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
  }
`;

export const Button = styled(MuiButton)`
  flex: 1;
`;
