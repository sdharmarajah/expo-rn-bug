import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Play = ({ width, height, ...props }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 14 16" fill="none" {...props}>
    <Path
      d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833333 16.1791 -7.73604e-07 15.698 -7.39955e-07 14.9282L-1.34273e-07 1.0718C-1.00623e-07 0.301996 0.833333 -0.17913 1.5 0.20577L13.5 7.13397Z"
      fill="#FF6900"
    />
  </Svg>
);
