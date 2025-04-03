import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Check = ({ ...props }: SvgProps) => (
  <Svg width="12" height="10" viewBox="0 0 9 7" fill="none" {...props}>
    <Path
      d="M7.75 0.5L2.5 5.75L0.5 3.75" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"
    />
  </Svg>
);
