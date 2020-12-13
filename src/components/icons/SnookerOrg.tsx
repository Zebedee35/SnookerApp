import * as React from 'react';
import Svg, {SvgProps, Defs, RadialGradient, Stop, G, Ellipse, Circle} from 'react-native-svg';

function SvgSnookerOrg(props: SvgProps) {
  return (
    <Svg width={24} height={17} xmlns="http://www.w3.org/2000/svg" className="" {...props}>
      <Defs>
        <RadialGradient
          cx="35.103%"
          cy="28.601%"
          fx="35.103%"
          fy="28.601%"
          r="80.244%"
          id="SnookerOrg_svg__a">
          <Stop stopColor="#FB7272" offset="0%" />
          <Stop stopColor="#900000" offset="100%" />
        </RadialGradient>
      </Defs>
      <G transform="translate(0 -4.182)" fill="none" fillRule="evenodd">
        <Ellipse fill="#D8D8D8" cx={7.52} cy={18.72} rx={6.56} ry={2.08} />
        <Ellipse fill="#000" cx={16.8} cy={18.08} rx={6.88} ry={1.76} />
        <Circle fill="url(#SnookerOrg_svg__a)" cx={11.36} cy={12} r={7.52} />
      </G>
    </Svg>
  );
}

export default SvgSnookerOrg;
