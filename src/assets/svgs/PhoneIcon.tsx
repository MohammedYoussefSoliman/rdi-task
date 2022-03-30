import colors from "helpers/colors";
import { Property } from "csstype";

type SVGprop = {
  size?: number;
  color?: Property.Color;
};

export default function PhoneIcon({ size, color }: SVGprop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
    >
      <path
        id="Icon_awesome-phone-alt"
        data-name="Icon awesome-phone-alt"
        d="M23.315,16.96l-5.25-2.25a1.125,1.125,0,0,0-1.313.323l-2.325,2.841A17.375,17.375,0,0,1,6.122,9.568L8.963,7.243A1.122,1.122,0,0,0,9.286,5.93L7.036.68A1.133,1.133,0,0,0,5.747.029L.872,1.154A1.125,1.125,0,0,0,0,2.25,21.748,21.748,0,0,0,21.75,24a1.125,1.125,0,0,0,1.1-.872l1.125-4.875A1.139,1.139,0,0,0,23.315,16.96Z"
        transform="translate(0 0)"
        fill={color || colors.primary[200]}
      />
    </svg>
  );
}