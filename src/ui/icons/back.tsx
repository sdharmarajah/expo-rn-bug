import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const BackArrow = ({ width, height, ...props }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 32 20" fill="none" {...props}>
    <Path
      d="M10 18L2 10L10 2"
      stroke="#FF6900"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2 10H26.5"
      stroke="#FF6900"
      stroke-width="4"
      stroke-linecap="round"
    />
  </Svg>
);
