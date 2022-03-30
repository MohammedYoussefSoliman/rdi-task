export const breakpoints = {
  xs: "280px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1360px",
  hd: "1900px",
};

const devices = {
  xSmall: `@media screen and (min-width: ${breakpoints.xs})`,
  small: `@media screen and (min-width: ${breakpoints.sm})`,
  medium: `@media screen and (min-width: ${breakpoints.md})`,
  large: `@media screen and (min-width: ${breakpoints.lg})`,
  xLarge: `@media screen and (min-width: ${breakpoints.xl})`,
  xxLarge: `@media screen and (min-width: ${breakpoints.xxl})`,
  hd: `@media screen and (min-width: ${breakpoints.hd})`,
};

export default devices;
