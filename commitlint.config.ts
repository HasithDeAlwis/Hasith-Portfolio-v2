import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  // Extend conventional commit configurations
  // https://www.conventionalcommits.org/en/v1.0.0/
  extends: ['@commitlint/config-conventional'],

  rules: {
    // -------------- TYPE ----------------
    'type-enum': [
      RuleConfigSeverity.Error,
      'always', // Always enforce this rule
      [
        'ui', // UI related changes (eg. a button colour is changed)
        'build', // Build-related changes (e.g., compile, package)
        'chore', // Other changes that don't modify src or test files
        'ci', // Continuous Integration changes
        'docs', // Documentation changes
        'feat', // New features
        'fix', // Bug fixes
        'perf', // Performance improvements
        'refactor', // Code refactoring without changing functionality
        'revert', // Revert previous commits
        'style', // Code style changes (formatting, white-space, etc.)
        'test', // Adding or updating tests,
        'storybook', // For adding components to storybook
      ],
    ],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],

    // -------------- SCOPE ----------------
    // Ensure scope is in PascalCase
    'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    // Ensure scope is not empty
    'scope-empty': [RuleConfigSeverity.Error, 'never'],

    // -------------- SUBJECT ----------------
    // Ensure subject is in sentence-case
    'subject-case': [RuleConfigSeverity.Error, 'never', []],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],

    // -------------- HEADER ----------------
    // Ensure the header does not exceed 72 characters
    'header-max-length': [RuleConfigSeverity.Error, 'always', 72],

    // -------------- BODY ----------------
    // Ensure the body does not exceed 100 characters per line
    'body-max-line-length': [RuleConfigSeverity.Warning, 'always', 100],

    // -------------- FOOTER ----------------
    // Ensure the footer does not exceed 100 characters per line
    'footer-max-line-length': [RuleConfigSeverity.Warning, 'always', 100],
  },
}

export default Configuration
