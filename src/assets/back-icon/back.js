import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Back = ({ width, height }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    <Path
      d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z"
      fill="none"
      stroke="black"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </Svg>
);

export default Back;
