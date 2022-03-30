import CSS from "csstype";
import MuiCircularProgress, {
  CircularProgressProps,
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import colors from "helpers/colors";
import SpinnerWrapper from "./styles";

interface SpinnerProps extends CircularProgressProps {
  bottomColor?: CSS.Property.Color;
  topColor?: CSS.Property.Color;
  margin?: CSS.Property.Padding;
}

export default function Spinner(props: SpinnerProps) {
  const { bottomColor, topColor, margin, size } = props;

  return (
    <SpinnerWrapper wrapperPadding={margin} size={`${size}px`}>
      <MuiCircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: bottomColor || colors.primary[100],
          animationDuration: "700ms",
          position: "absolute",
          left: 0,
        }}
        size={50}
        thickness={5}
        value={100}
        {...props}
      />
      <MuiCircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: topColor || colors.primary[300],
          animationDuration: "700ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={50}
        thickness={5}
        {...props}
      />
    </SpinnerWrapper>
  );
}
