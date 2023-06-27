import * as React from 'react';
import Svg, {
  Defs,
  Image,
  Path,
  Pattern,
  Rect,
  SvgProps,
  Use,
} from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
  style?: Record<string, unknown>;
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
}

export const Dashboard: React.FC<IconProps> = (props: IconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.color || '#5A5A70'}
      d="M6 3.6A2.4 2.4 0 0 0 3.6 6v2.4A2.4 2.4 0 0 0 6 10.8h2.4a2.4 2.4 0 0 0 2.4-2.4V6a2.4 2.4 0 0 0-2.4-2.4H6ZM6 13.2a2.4 2.4 0 0 0-2.4 2.4V18A2.4 2.4 0 0 0 6 20.4h2.4a2.4 2.4 0 0 0 2.4-2.4v-2.4a2.4 2.4 0 0 0-2.4-2.4H6ZM13.2 6a2.4 2.4 0 0 1 2.4-2.4H18A2.4 2.4 0 0 1 20.4 6v2.4a2.4 2.4 0 0 1-2.4 2.4h-2.4a2.4 2.4 0 0 1-2.4-2.4V6ZM13.2 15.6a2.4 2.4 0 0 1 2.4-2.4H18a2.4 2.4 0 0 1 2.4 2.4V18a2.4 2.4 0 0 1-2.4 2.4h-2.4a2.4 2.4 0 0 1-2.4-2.4v-2.4Z"
    />
  </Svg>
);

export const Transactions: React.FC<IconProps> = (props: IconProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      d="M3.667 10h18m-14 5h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-12a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"
      stroke={props.color || '#5A5A70'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Accounts: React.FC<IconProps> = (props: IconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z"
      stroke={props.color || '#5A5A70'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
