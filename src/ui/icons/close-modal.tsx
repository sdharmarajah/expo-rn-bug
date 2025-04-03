import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';

export function CloseModal({ ...props }) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      {/* Define the mask */}
      <Mask id="mask0_4020_864" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
        <Path
          d="M9 17C13.4184 17 17 13.4184 17 9C17 4.5816 13.4184 1 9 1C4.5816 1 1 4.5816 1 9C1 13.4184 4.5816 17 9 17Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <Path
          d="M11.2629 6.7373L6.7373 11.2629M6.7373 6.7373L11.2629 11.2629"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Mask>

      {/* Apply the mask */}
      <G mask="url(#mask0_4020_864)">
        <Path d="M-0.599609 -0.600098H18.6004V18.5999H-0.599609V-0.600098Z" fill="#FF6F00" />
      </G>
    </Svg>
  );
}
