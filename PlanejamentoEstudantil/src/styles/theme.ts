/**
 * Sistema de Design - Tema Global
 * Define cores, tipografia, espaçamento e componentes reutilizáveis
 */

export const colors = {
  // Primárias
  primary: '#6C5CE7',        // Roxo vibrante
  primaryLight: '#A29BFE',   // Roxo claro
  primaryDark: '#5F3DC4',    // Roxo escuro

  // Secundárias
  secondary: '#00B894',      // Verde sucesso
  secondaryLight: '#55EFC4', // Verde claro
  secondaryDark: '#00A372',  // Verde escuro

  // Status
  danger: '#FF7675',         // Vermelho para urgência
  warning: '#FDCB6E',        // Amarelo para aviso
  info: '#74B9FF',           // Azul para informação
  success: '#00B894',        // Verde para sucesso

  // Neutras
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F5F6FA',
  gray200: '#E8EAED',
  gray300: '#D3D6E0',
  gray400: '#BCC2D1',
  gray500: '#95989F',
  gray600: '#5F6368',
  gray700: '#202124',

  // Backgrounds
  bgLight: '#F8F9FA',
  bgCard: '#FFFFFF',
  bgHover: '#F1F3F5',
};

export const typography = {
  // Tamanhos
  size: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },
  // Pesos
  weight: {
    light: 300 as const,
    normal: 400 as const,
    medium: 500 as const,
    semibold: 600 as const,
    bold: 700 as const,
  },
  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
};

export const borderRadius = {
  none: 0,
  sm: 4,
  base: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 999,
};

export const shadows = {
  sm: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
};

export const gradients = {
  primary: {
    colors: [colors.primary, colors.primaryDark],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  success: {
    colors: [colors.secondary, colors.secondaryDark],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
};
