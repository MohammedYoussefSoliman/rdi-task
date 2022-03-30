import styled from "@emotion/styled";
import CSS from "csstype";
import { css } from "@emotion/react";
import { flexGapCalculator } from "../../../functions";

type WrapperProps = {
  width?: CSS.Property.Width;
  height?: CSS.Property.Height;
  direction?: CSS.Property.FlexDirection;
  justify?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  gap?: CSS.Property.Gap;
  flex?: CSS.Property.Flex;
  fullWidth?: boolean;
};

const Wrapper = styled("div")<WrapperProps>`
  display: flex;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
    ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}
    ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
    ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
    ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
    ${({ gap, direction }) =>
    gap &&
    css`
      gap: ${gap};
      @supports not (gap: ${gap}) {
        ${flexGapCalculator(gap, direction)}
      }
    `}
`;

export default Wrapper;
