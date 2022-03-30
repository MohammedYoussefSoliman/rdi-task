import { useMediaQuery } from "@mui/material";
import devices from "helpers/devices";

export default function useBreakpoints() {
  const hd = useMediaQuery(devices.hd);
  const xxLarge = useMediaQuery(devices.xxLarge);
  const xLarge = useMediaQuery(devices.xLarge);
  const large = useMediaQuery(devices.large);
  const medium = useMediaQuery(devices.medium);
  const small = useMediaQuery(devices.small);
  const xSmall = useMediaQuery(devices.xSmall);
  return {
    hd,
    xxLarge,
    xLarge,
    large,
    medium,
    small,
    xSmall,
  };
}
