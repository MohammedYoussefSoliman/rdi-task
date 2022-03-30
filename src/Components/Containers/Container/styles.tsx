import styled from "@emotion/styled";
import { css } from "@emotion/react";
import devices from "helpers/devices";

type WrapperProps = {
  variants: {
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    xxLarge: string;
  };
};

const Wrapper = styled("div")<WrapperProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;
  ${({ variants }) =>
    variants &&
    css`
      ${devices.xSmall} {
        max-width: ${variants.xSmall};
      }
      ${devices.small} {
        max-width: ${variants.small};
      }
      ${devices.medium} {
        max-width: ${variants.medium};
      }
      ${devices.large} {
        max-width: ${variants.large};
      }
      ${devices.xxLarge} {
        max-width: ${variants.xxLarge};
      }
    `};
`;

export default Wrapper;
