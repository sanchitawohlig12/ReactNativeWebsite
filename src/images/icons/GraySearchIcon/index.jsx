import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GraySearchIcon = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.554 11.333q-2.328 0-3.941-1.573T0 5.917t1.613-3.844T5.553.5q2.33 0 3.942 1.573t1.613 3.844q0 .916-.3 1.729a5 5 0 0 1-.811 1.437l4.785 4.667a.78.78 0 0 1 .235.583.78.78 0 0 1-.235.584.82.82 0 0 1-.598.229.82.82 0 0 1-.599-.23L8.801 10.25a5.1 5.1 0 0 1-1.474.792 5.3 5.3 0 0 1-1.773.291m0-1.666q1.602 0 2.723-1.094Q9.4 7.478 9.4 5.917T8.277 3.26q-1.12-1.093-2.723-1.093T2.83 3.26 1.71 5.917q0 1.562 1.121 2.656 1.122 1.095 2.724 1.094"
      fill="#C5BEC0"
    />
  </Svg>
);
export default GraySearchIcon;
