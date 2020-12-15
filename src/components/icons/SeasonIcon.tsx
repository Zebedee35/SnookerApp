import * as React from 'react';
import Svg, {SvgProps, G, Path, Rect, Defs, ClipPath} from 'react-native-svg';

function SvgSeasonIcon(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <G clipPath="url(#SeasonIcon_svg__clip0)" fill="currentColor">
        <Path d="M4.943 15.362a2.377 2.377 0 002.382-2.372 2.377 2.377 0 00-2.382-2.372A2.377 2.377 0 002.56 12.99a2.377 2.377 0 002.382 2.372zM10.98 15.362a2.377 2.377 0 002.382-2.372 2.377 2.377 0 00-2.382-2.372 2.377 2.377 0 00-2.382 2.372 2.377 2.377 0 002.382 2.372zM17.018 15.362A2.377 2.377 0 0019.4 12.99a2.377 2.377 0 00-2.382-2.372 2.377 2.377 0 00-2.382 2.372 2.377 2.377 0 002.382 2.372zM23.055 15.362a2.377 2.377 0 002.382-2.372 2.377 2.377 0 00-2.382-2.372 2.377 2.377 0 00-2.382 2.372 2.377 2.377 0 002.382 2.372zM4.943 22.002a2.377 2.377 0 002.382-2.372 2.377 2.377 0 00-2.382-2.372A2.377 2.377 0 002.56 19.63a2.377 2.377 0 002.382 2.372zM10.98 22.002a2.377 2.377 0 002.382-2.372 2.377 2.377 0 00-2.382-2.372 2.377 2.377 0 00-2.382 2.372 2.377 2.377 0 002.382 2.372zM17.018 22.002A2.377 2.377 0 0019.4 19.63a2.377 2.377 0 00-2.382-2.372 2.377 2.377 0 00-2.382 2.372 2.377 2.377 0 002.382 2.372zM12.959 4.234H8.516v1.027h4.443V4.234z" />
        <Path d="M22.714 4.234v1.027h4.255v19.38H1.031V5.26h4.512V4.234H0v21.433h28V4.234h-5.286z" />
        <Path d="M20.252 4.234h-4.72v1.027h4.72V4.234z" />
        <Rect x={6.413} y={1.167} width={1.145} height={6.842} rx={0.573} />
        <Rect x={13.742} y={1.167} width={1.145} height={6.842} rx={0.573} />
        <Rect x={20.843} y={1.167} width={1.145} height={6.842} rx={0.573} />
      </G>
      <Defs>
        <ClipPath id="SeasonIcon_svg__clip0">
          <Path fill="#fff" transform="translate(0 1.167)" d="M0 0h28v24.5H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgSeasonIcon;