import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgRankingIcon(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <G clipPath="url(#RankingIcon_svg__clip0)" fill="currentColor">
        <Path d="M3.687 14.728c2.036 0 3.687-1.631 3.687-3.644 0-2.012-1.65-3.644-3.687-3.644C1.651 7.44 0 9.072 0 11.084c0 2.013 1.65 3.644 3.687 3.644zM24.2 20.465c2.037 0 3.688-1.631 3.688-3.644 0-2.012-1.65-3.644-3.687-3.644s-3.687 1.632-3.687 3.644c0 2.013 1.65 3.644 3.687 3.644zM14.018 7.288c2.036 0 3.687-1.632 3.687-3.644C17.705 1.631 16.054 0 14.018 0 11.98 0 10.33 1.631 10.33 3.644c0 2.012 1.651 3.644 3.688 3.644z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.472 16.154H0v12h7.472v-12zm-.934.923H.934v10.154h5.604V17.078zM17.747 8.308h-7.473v19.847h7.473V8.308zm-.934.923h-5.605v18h5.605v-18zM28.021 21.693h-7.472v6.462h7.472v-6.462zm-.934.923h-5.604v4.616h5.604v-4.616z"
        />
      </G>
      <Defs>
        <ClipPath id="RankingIcon_svg__clip0">
          <Path fill="#fff" d="M0 0h28v28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgRankingIcon;
