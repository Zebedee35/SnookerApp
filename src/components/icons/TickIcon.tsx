import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgTickIcon(props: SvgProps) {
  return (
    <Svg
      width={64}
      height={64}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <Path
        d="M54.974 14.709a2.411 2.411 0 00-3.41-.005l-28.937 28.86-10.44-11.338a2.413 2.413 0 00-3.55 3.267l12.141 13.185a2.409 2.409 0 001.775.779c.637 0 1.25-.254 1.703-.704L54.969 18.12c.944-.94.946-2.468.005-3.412z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgTickIcon;
