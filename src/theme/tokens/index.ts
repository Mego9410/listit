export type ColorToken =
  | 'background'
  | 'surface'
  | 'primary'
  | 'primaryHover'
  | 'accent'
  | 'border'
  | 'text'
  | 'textSecondary'
  | 'danger';

export type SpaceToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'full';

export type FontSizeToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'display';

export type FontWeightToken = 'regular' | 'medium' | 'semibold' | 'bold';

export interface ThemeTokens {
  colors: Record<ColorToken, string>;
  spacing: Record<SpaceToken, number>;
  radii: Record<RadiusToken, number>;
  fontSizes: Record<FontSizeToken, number>;
  fontWeights: Record<FontWeightToken, string>;
  shadows: {
    level1: {
      elevation: number;
    };
  };
}

export const defaultTokens: ThemeTokens = {
  colors: {
    background: '#0B0C0F',
    surface: '#121318',
    primary: '#5B8CFF',
    primaryHover: '#3A6EF5',
    accent: '#38C3A0',
    border: '#23242C',
    text: '#F4F5F7',
    textSecondary: '#9EA3B5',
    danger: '#FF6B6B',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  radii: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
    full: 999,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    display: 32,
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  shadows: {
    level1: {
      elevation: 4,
    },
  },
};

