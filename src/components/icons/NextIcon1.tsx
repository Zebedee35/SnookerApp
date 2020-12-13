import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgNextIcon1(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <G clipPath="url(#NextIcon1_svg__clip0)">
        <Path
          d="M13.655 8.47L5.405.22a.75.75 0 10-1.06 1.06L12.065 9l-7.72 7.72a.75.75 0 101.06 1.06l8.25-8.25a.75.75 0 000-1.06z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="NextIcon1_svg__clip0">
          <Path fill="#fff" d="M0 0h18v18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNextIcon1;
