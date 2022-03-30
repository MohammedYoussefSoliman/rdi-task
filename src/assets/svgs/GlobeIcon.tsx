import colors from "helpers/colors";
import { Property } from "csstype";

type SVGprop = {
  size?: number;
  color?: Property.Color;
};

export default function GlobeIcon({ size, color }: SVGprop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
    >
      <g transform="translate(-283.5 -489.5)">
        <path
          d="M13.5,1.5a12,12,0,0,1,4.671,23.057A12,12,0,0,1,8.829,2.443,11.926,11.926,0,0,1,13.5,1.5Zm0,21.818A9.818,9.818,0,1,0,3.682,13.5,9.829,9.829,0,0,0,13.5,23.318Z"
          transform="translate(282 488)"
          fill={color || colors.primary[200]}
        />
        <path
          id="Path_67458"
          data-name="Path 67458"
          d="M24.409,18.682H2.591a1.091,1.091,0,0,1,0-2.182H24.409a1.091,1.091,0,0,1,0,2.182Z"
          transform="translate(282 483.909)"
          fill={color || colors.primary[200]}
        />
        <path
          id="Path_67459"
          data-name="Path 67459"
          d="M15.955,1.5a1.091,1.091,0,0,1,.805.355,17.776,17.776,0,0,1,4.649,11.622q0,.023,0,.045A17.776,17.776,0,0,1,16.76,25.145a1.091,1.091,0,0,1-1.611,0A17.776,17.776,0,0,1,10.5,13.523q0-.023,0-.045A17.776,17.776,0,0,1,15.149,1.855,1.091,1.091,0,0,1,15.955,1.5Zm3.272,12a15.6,15.6,0,0,0-3.272-9.217A15.6,15.6,0,0,0,12.682,13.5a15.6,15.6,0,0,0,3.272,9.217A15.6,15.6,0,0,0,19.227,13.5Z"
          transform="translate(279.545 488)"
          fill={color || colors.primary[200]}
        />
      </g>
    </svg>
  );
}
