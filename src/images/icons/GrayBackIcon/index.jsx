import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GrayBackIcon = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.375 9.375h12.5a.625.625 0 1 1 0 1.25h-12.5a.625.625 0 1 1 0-1.25"
      fill="#C5BEC0"
    />
    <Path
      d="m4.634 10 5.184 5.182a.626.626 0 0 1-.885.885l-5.625-5.625a.625.625 0 0 1 0-.885l5.625-5.625a.626.626 0 0 1 .885.885z"
      fill="#C5BEC0"
    />
  </Svg>
);
export default GrayBackIcon;
