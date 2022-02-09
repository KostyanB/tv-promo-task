import React from 'react';
import IconStyle from './IconStyle';

export const CrossIcon = ({
  name = 'Close',
  color = 'currentColor',
  width = 24,
  height = 24,
}) => (
  <IconStyle viewBox="0 0 24 24" fill="none" width={width} height={height}>
    <title>{name}</title>
    <path d="M2.34485 1.94067L22.6264 22.2223" stroke={color} strokeWidth="3" />
    <path d="M1.65759 22.2223L21.9392 1.94067" stroke={color} strokeWidth="3" />
  </IconStyle>
);
