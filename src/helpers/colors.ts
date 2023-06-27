export type ColorsProps =
  | 'Black'
  | 'White'
  | 'Gray'
  | 'Violet'
  | 'Teal'
  | 'Purple'
  | 'WhiteShadow'
  | 'Blue'
  | 'WhiteLow'
  | 'RedDark'
  | 'GreenDark'
  | 'YellowDark'
  | 'PurpleDarker';

export const Colors: Record<ColorsProps, string> = {
  Black: '#000000',
  White: '#FFFFFF',
  Gray: '#9CA3AF',
  Violet: '#8C6BD3',
  Teal: '#73E5D9',
  Purple: '#2A2B48',
  PurpleDarker: '#141527',
  Blue: '#4594F7',
  WhiteShadow: '#F9FAFB',
  WhiteLow: '#E5E7EB',
  RedDark: '#991B1B',
  GreenDark: '#065F46',
  YellowDark: '#FCD34D',
};
