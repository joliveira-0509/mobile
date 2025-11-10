import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,
    paddingVertical: spacing.lg,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.base,
    ...shadows.md,
  },
  title: {
    fontSize: typography.size['3xl'],
    fontWeight: typography.weight.bold,
    color: colors.white,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.size.base,
    color: colors.primaryLight,
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.base,
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
    gap: spacing.base,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    ...shadows.sm,
  },
  statNumber: {
    fontSize: typography.size['2xl'],
    fontWeight: typography.weight.bold,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: typography.size.sm,
    color: colors.gray500,
    fontWeight: typography.weight.medium,
  },
  actionsContainer: {
    paddingHorizontal: spacing.base,
    gap: spacing.base,
  },
  buttonContainer: {
    overflow: 'hidden',
    borderRadius: borderRadius.md,
  },
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.sm,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    marginBottom: spacing.sm,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    marginBottom: spacing.sm,
  },
  buttonTertiary: {
    backgroundColor: colors.info,
    marginBottom: spacing.sm,
  },
  buttonText: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.white,
  },
});

export default styles;