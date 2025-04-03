import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = ({ ...props }: SvgProps) => (
  <Svg
    width="22"
    height="2234"
    viewBox="0 0 22 23"
    fill={props.fill ?? 'none'}
    {...props}
  >
    <Path
      d="M19.3501 6.42881C19.9595 6.78853 20.3334 7.44349 20.3334 8.15114V19.3333C20.3334 20.4379 19.438 21.3333 18.3334 21.3333H15.3334C14.2288 21.3333 13.3334 20.4379 13.3334 19.3333V13.9999C13.3334 12.8953 12.438 11.9999 11.3334 11.9999H10.6667C9.56218 11.9999 8.66675 12.8953 8.66675 13.9999V19.3333C8.66675 20.4379 7.77132 21.3333 6.66675 21.3333H3.66675C2.56218 21.3333 1.66675 20.4379 1.66675 19.3333V8.15114C1.66675 7.44349 2.04069 6.78853 2.6501 6.42881L9.98343 2.10011C10.6106 1.72988 11.3895 1.72988 12.0167 2.10011L19.3501 6.42881Z"
      stroke={props.color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
