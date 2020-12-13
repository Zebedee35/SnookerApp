import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

function SvgLiveIcon(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.357 9.447L7.593 7.899a9.307 9.307 0 00-2.926 6.787 9.304 9.304 0 002.738 6.604l1.812-1.493A6.98 6.98 0 017 14.686c0-2.085.911-3.957 2.357-5.24zm9.285 10.478l1.765 1.548a9.307 9.307 0 002.926-6.787 9.307 9.307 0 00-2.926-6.787l-1.764 1.548A6.983 6.983 0 0121 14.686a6.983 6.983 0 01-2.358 5.239z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.793 24.268l1.805-1.488a11.628 11.628 0 01-3.265-8.094c0-3.264 1.34-6.214 3.5-8.331L4.074 4.812A13.956 13.956 0 000 14.687c0 3.707 1.441 7.078 3.793 9.582zM28 14.686c0 3.852-1.556 7.342-4.074 9.873l-1.759-1.542a11.631 11.631 0 003.5-8.331c0-3.264-1.34-6.214-3.5-8.331l1.759-1.543A13.956 13.956 0 0128 14.687z"
        fill="currentColor"
      />
      <Circle cx={14} cy={14.686} fill="currentColor" r={4.667} />
    </Svg>
  );
}

export default SvgLiveIcon;
