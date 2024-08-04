import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const OverviewIcon = (props) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
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
      width={22}
      height={22}
    >
      <Path fill="#D9D9D9" d="M0 0h22v22H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M12.306 18.975 6.67 13.108a.95.95 0 0 1-.252-.642v-.55q0-.39.263-.652A.9.9 0 0 1 7.333 11h2.292q1.215 0 2.097-.79a3.23 3.23 0 0 0 1.066-1.96H6.416a.9.9 0 0 1-.653-.264.9.9 0 0 1-.264-.653q0-.39.264-.653a.9.9 0 0 1 .653-.263h6.095a3.3 3.3 0 0 0-1.157-1.318 3.03 3.03 0 0 0-1.73-.516H6.417a.9.9 0 0 1-.653-.263.9.9 0 0 1-.264-.653q0-.39.264-.653a.9.9 0 0 1 .653-.264h9.166q.39 0 .653.264a.9.9 0 0 1 .264.653q0 .39-.264.653a.9.9 0 0 1-.653.263h-2.062a5.5 5.5 0 0 1 .573.848q.252.459.39.986h1.1q.39 0 .652.263a.9.9 0 0 1 .264.653q0 .39-.264.653a.9.9 0 0 1-.653.264h-.94q-.183 1.948-1.603 3.266-1.422 1.317-3.415 1.317H8.96l4.675 4.859q.413.435.172.997-.24.561-.836.561a.92.92 0 0 1-.665-.275"
        fill="#6B6062"
      />
    </G>
  </Svg>
);
export default OverviewIcon;