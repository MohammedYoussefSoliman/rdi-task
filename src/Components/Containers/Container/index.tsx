import React from "react";
import Wrapper from "./styles";

type PropsType = {
  width?: "normal" | "medium" | "wide" | "extraWide" | "fullWidth";
  children: React.ReactNode;
};

const containerWidths = {
  fullWidth: {
    xSmall: "100%",
    small: "100%",
    medium: "100%",
    large: "100%",
    xLarge: "100%",
    xxLarge: "100%",
    hd: "100%",
  },
  extraWide: {
    xSmall: "100%",
    small: "100%",
    medium: "100%",
    large: "960px",
    xLarge: "1150px",
    xxLarge: "1250px",
    hd: "1650px",
  },
  wide: {
    xSmall: "100%",
    small: "100%",
    medium: "100%",
    large: "900px",
    xLarge: "1050px",
    xxLarge: "1150px",
    hd: "1540px",
  },
  medium: {
    xSmall: "100%",
    small: "460px",
    medium: "640px%",
    large: "870px",
    xLarge: "1000px",
    xxLarge: "1200px",
    hd: "1440px",
  },
  normal: {
    xSmall: "100%",
    small: "420px",
    medium: "600px%",
    large: "840px",
    xLarge: "1150px",
    xxLarge: "1150px",
    hd: "1150px",
  },
};

export default function Container({ width = "normal", children }: PropsType) {
  return <Wrapper variants={containerWidths[width]}>{children}</Wrapper>;
}
