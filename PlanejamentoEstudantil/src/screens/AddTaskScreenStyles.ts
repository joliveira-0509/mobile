import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,
    padding: spacing.base,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.base,
    borderRadius: borderRadius.md,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  headerTitle: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    color: colors.white,
  },
  scrollContainer: {
    paddingBottom: spacing.xl,
  },
  formSection: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.gray700,
    marginBottom: spacing.sm,
    marginTop: spacing.base,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.gray300,
    borderRadius: borderRadius.base,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
    fontSize: typography.size.base,
    color: colors.gray700,
    minHeight: 48,
    ...shadows.sm,
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  inputError: {
    borderColor: colors.danger,
    backgroundColor: '#FFEBEE',
  },
  pickerContainer: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.gray300,
    borderRadius: borderRadius.base,
    overflow: 'hidden',
    ...shadows.sm,
  },
  picker: {
    height: 48,
  },
  dateButton: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.gray300,
    borderRadius: borderRadius.base,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
    minHeight: 48,
    justifyContent: 'center',
    ...shadows.sm,
  },
  dateButtonText: {
    fontSize: typography.size.base,
    color: colors.gray700,
    fontWeight: typography.weight.medium,
  },
  dateSelected: {
    backgroundColor: colors.primaryLight,
    marginTop: spacing.sm,
    padding: spacing.base,
    borderRadius: borderRadius.base,
  },
  dateSelectedText: {
    fontSize: typography.size.sm,
    color: colors.primary,
    fontWeight: typography.weight.semibold,
  },
  error: {
    backgroundColor: '#FFEBEE',
    borderLeftWidth: 4,
    borderLeftColor: colors.danger,
    padding: spacing.base,
    borderRadius: borderRadius.base,
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  errorText: {
    color: colors.danger,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  buttonFlex: {
    flex: 1,
  },
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 48,
    ...shadows.sm,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.gray200,
  },
  buttonText: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.white,
  },
  buttonSecondaryText: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.gray700,
  },
});

export default styles;