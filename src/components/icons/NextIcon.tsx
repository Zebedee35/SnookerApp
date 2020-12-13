import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgNextIcon(props: SvgProps) {
  return (
    <Svg
      width={64}
      height={64}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <G clipPath="url(#NextIcon_svg__clip0)">
        <Path
          d="M48.552 30.115L19.219.782a2.664 2.664 0 00-3.77 0 2.664 2.664 0 000 3.77L42.895 32 15.448 59.448a2.664 2.664 0 000 3.77 2.66 2.66 0 001.885.782 2.66 2.66 0 001.886-.781l29.333-29.334a2.664 2.664 0 000-3.77z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="NextIcon_svg__clip0">
          <Path fill="currentColor" d="M0 0h64v64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNextIcon;
