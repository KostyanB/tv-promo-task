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

export const CheckIcon = ({
  name = 'Check',
  color = 'currentColor',
  width = 24,
  height = 20,
}) => (
  <IconStyle viewBox="0 0 24 20" fill="none" width={width} height={height}>
    <title>{name}</title>
    <line
      x1="1.06066"
      y1="11.5659"
      x2="8.06066"
      y2="18.5659"
      stroke={color}
      strokeWidth="3"
    />
    <line
      x1="6.2953"
      y1="18.5659"
      x2="22.9218"
      y2="1.93934"
      stroke={color}
      strokeWidth="3"
    />
  </IconStyle>
);
