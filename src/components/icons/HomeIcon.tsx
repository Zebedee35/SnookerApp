import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgHomeIcon(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <G clipPath="url(#HomeIcon_svg__clip0)" fill="currentColor">
        <Path d="M14.096 10.197c1.95 0 3.53-1.573 3.53-3.513s-1.58-3.513-3.53-3.513a3.522 3.522 0 00-3.53 3.513c0 1.94 1.58 3.513 3.53 3.513zM9.848 17.48c1.95 0 3.53-1.572 3.53-3.512s-1.58-3.513-3.53-3.513a3.522 3.522 0 00-3.53 3.513c0 1.94 1.58 3.513 3.53 3.513zM5.862 24.896c1.95 0 3.53-1.573 3.53-3.513s-1.58-3.513-3.53-3.513a3.522 3.522 0 00-3.53 3.513c0 1.94 1.58 3.513 3.53 3.513zM14.096 24.896c1.95 0 3.53-1.573 3.53-3.513s-1.58-3.513-3.53-3.513a3.522 3.522 0 00-3.53 3.513c0 1.94 1.58 3.513 3.53 3.513zM22.332 24.896c1.95 0 3.53-1.573 3.53-3.513s-1.58-3.513-3.53-3.513a3.522 3.522 0 00-3.53 3.513c0 1.94 1.58 3.513 3.53 3.513zM18.281 17.48c1.95 0 3.53-1.572 3.53-3.512s-1.58-3.513-3.53-3.513a3.522 3.522 0 00-3.53 3.513c0 1.94 1.58 3.513 3.53 3.513z" />
        <Path d="M21.813 26.833H6.193c-2.639 0-4.622-.914-5.59-2.578-.968-1.664-.771-3.829.548-6.102L8.962 4.69c1.317-2.272 3.108-3.524 5.035-3.524 1.93 0 3.718 1.252 5.037 3.524l7.812 13.462c1.319 2.273 1.513 4.449.547 6.102-.966 1.653-2.942 2.578-5.58 2.578zM14.001 2.12c-1.565 0-3.067 1.083-4.207 3.048l-7.81 13.461c-1.14 1.967-1.34 3.796-.55 5.15.792 1.356 2.478 2.103 4.758 2.103h15.621c2.28 0 3.97-.745 4.758-2.102.787-1.357.59-3.184-.55-5.15L18.21 5.166c-1.14-1.97-2.636-3.048-4.21-3.048z" />
      </G>
      <Defs>
        <ClipPath id="HomeIcon_svg__clip0">
          <Path fill="#fff" transform="translate(0 1.167)" d="M0 0h28v25.667H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgHomeIcon;
