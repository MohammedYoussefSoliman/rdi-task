import tinyColor from "tinycolor2";

const colors = {
  primary: {
    100: "#E0DEEA",
    200: "#8984B7",
    300: "#7063A7",
  },
  grey: {
    100: "#F1F1F1",
    200: "#C2C2C2",
    300: "#808080",
  },
  error: {
    100: tinyColor("#FC7474").lighten(23).toString(),
    200: "#FC7474",
    300: tinyColor("#FC7474").darken(15).toString(),
  },
  warning: {
    100: tinyColor("#FCCA74").lighten(23).toString(),
    200: "#FCCA74",
    300: tinyColor("#FCCA74").darken(15).toString(),
  },
  white: "#FFFFFF",
  success: {
    100: tinyColor("#20BE11").lighten(55).toString(),
    200: "#20BE11",
    300: tinyColor("#20BE11").darken(5).toString(),
  },
};

export default colors;
