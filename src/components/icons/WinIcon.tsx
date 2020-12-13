import * as React from 'react';
import Svg, {SvgProps, G, Rect, Text, TSpan} from 'react-native-svg';

function SvgWinIcon(props: SvgProps) {
  return (
    <Svg width={22} height={22} xmlns="http://www.w3.org/2000/svg" className="" {...props}>
      <G fill="none" fillRule="evenodd">
        <Rect fill="#7ED321" width={22} height={22} rx={5} />
        <Text fontFamily="Avenir-Black, Avenir" fontSize={14} fontWeight={700} fill="#FFF">
          <TSpan x={4} y={16}>
            {'W'}
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
}

export default SvgWinIcon;
