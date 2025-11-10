import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.base,
    ...shadows.md,
  },
  title: {
    fontSize: typography.size['2xl'],
    fontWeight: typography.weight.bold,
    color: colors.white,
  },
  listContainer: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.base,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
  },
  emptyText: {
    fontSize: typography.size.base,
    color: colors.gray500,
    textAlign: 'center',
    marginBottom: spacing.base,
  },
  item: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    marginBottom: spacing.base,
    borderLeftWidth: 4,
    ...shadows.sm,
  },
  itemHigh: {
    borderLeftColor: colors.danger,
  },
  itemMedium: {
    borderLeftColor: colors.warning,
  },
  itemLow: {
    borderLeftColor: colors.secondary,
  },
  desc: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.gray700,
    marginBottom: spacing.sm,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: colors.gray400,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  infoText: {
    fontSize: typography.size.sm,
    color: colors.gray600,
  },
  priorityBadge: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priorityHigh: {
    backgroundColor: '#FFCDD2',
  },
  priorityMedium: {
    backgroundColor: '#FFF9C4',
  },
  priorityLow: {
    backgroundColor: '#C8E6C9',
  },
  priorityText: {
    fontSize: typography.size.xs,
    fontWeight: typography.weight.bold,
  },
  priorityTextHigh: {
    color: colors.danger,
  },
  priorityTextMedium: {
    color: '#FBC02D',
  },
  priorityTextLow: {
    color: colors.secondary,
  },
  statusBadge: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.full,
  },
  statusPending: {
    backgroundColor: '#EDE7F6',
  },
  statusCompleted: {
    backgroundColor: '#E8F5E9',
  },
  statusText: {
    fontSize: typography.size.xs,
    fontWeight: typography.weight.semibold,
  },
  statusTextPending: {
    color: colors.primary,
  },
  statusTextCompleted: {
    color: colors.secondary,
  },
  urgencyText: {
    fontSize: typography.size.sm,
    color: colors.gray500,
  },
  urgencyHigh: {
    color: colors.danger,
    fontWeight: typography.weight.semibold,
  },
  footer: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.base,
    borderTopWidth: 1,
    borderTopColor: colors.gray200,
    backgroundColor: colors.white,
  },
});

export default styles;