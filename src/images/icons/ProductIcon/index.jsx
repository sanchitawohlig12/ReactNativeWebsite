import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const ProductIcon = (props) => (
  <Svg
    width={23}
    height={22}
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={23}
      height={22}
    >
      <Path fill="#D9D9D9" d="M.5 0h22v22H.5z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M5.083 20.167q-.756 0-1.294-.539a1.77 1.77 0 0 1-.539-1.295V7.998a2 2 0 0 1-.665-.653 1.7 1.7 0 0 1-.252-.928v-2.75q0-.756.539-1.295.538-.54 1.295-.539h14.666q.757 0 1.295.539.54.538.539 1.295v2.75q0 .526-.252.928-.252.4-.665.653v10.335q0 .757-.539 1.295-.538.54-1.294.539zm-.916-13.75h14.666v-2.75H4.167zm5.5 6.416h3.666q.39 0 .653-.263a.9.9 0 0 0 .264-.653.9.9 0 0 0-.264-.653.9.9 0 0 0-.653-.264H9.667a.9.9 0 0 0-.653.264.9.9 0 0 0-.264.653q0 .39.264.653a.9.9 0 0 0 .653.263"
        fill="#6B6062"
      />
    </G>
  </Svg>
);
export default ProductIcon;
