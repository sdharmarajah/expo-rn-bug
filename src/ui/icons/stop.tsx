import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Rect } from 'react-native-svg';

export const Stop = ({ width, height, ...props }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 14 16" fill="none" {...props}>
    <Rect x="1" y="1" width="12" height="14" fill="#FF6900" />
  </Svg>
);
