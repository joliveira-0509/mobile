/**
 * Estilos Comuns - Componentes Reutilizáveis
 */
import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from './theme';

export const commonStyles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.base,
    backgroundColor: colors.bgLight,
  },
  containerPadded: {
    flex: 1,
    padding: spacing.base,
    backgroundColor: colors.bgLight,
  },

  // Cards
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  cardPrimary: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    marginBottom: spacing.md,
    ...shadows.md,
  },

  // Textos
  textTitle: {
    fontSize: typography.size['3xl'],
    fontWeight: typography.weight.bold,
    color: colors.gray700,
    marginBottom: spacing.base,
  },
  textSubtitle: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.semibold,
    color: colors.gray600,
    marginBottom: spacing.sm,
  },
  textBody: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.normal,
    color: colors.gray600,
    lineHeight: typography.lineHeight.normal,
  },
  textCaption: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.normal,
    color: colors.gray500,
  },
  textBold: {
    fontWeight: typography.weight.bold,
  },
  textWhite: {
    color: colors.white,
  },

  // Botões base
  button: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.sm,
    ...shadows.sm,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.sm,
    ...shadows.md,
  },
  buttonSecondary: {
    backgroundColor: colors.gray200,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  buttonDanger: {
    backgroundColor: colors.danger,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  buttonSuccess: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.sm,
  },

  // Inputs
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: borderRadius.base,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
    marginVertical: spacing.sm,
    fontSize: typography.size.base,
    color: colors.gray700,
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  inputError: {
    borderColor: colors.danger,
    borderWidth: 2,
  },

  // Labels
  label: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.gray700,
    marginBottom: spacing.sm,
    marginTop: spacing.base,
  },

  // Separadores
  divider: {
    height: 1,
    backgroundColor: colors.gray200,
    marginVertical: spacing.base,
  },

  // Badges/Status
  badge: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeSuccess: {
    backgroundColor: colors.secondaryLight,
  },
  badgeDanger: {
    backgroundColor: '#FFEBEE',
  },
  badgeWarning: {
    backgroundColor: '#FFF8E1',
  },
  badgeInfo: {
    backgroundColor: '#E3F2FD',
  },

  // Utilidades
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray200,
    marginVertical: spacing.base,
  },
});
