/**
 * Commit types:
 *
 * feat     - New features (e.g., "feat: add user authentication")
 * fix      - Bug fixes (e.g., "fix: resolve login error")
 * docs     - Documentation changes (e.g., "docs: update README")
 * style    - Code style changes like formatting (e.g., "style: format files")
 * refactor - Code changes that neither fix bugs nor add features (e.g., "refactor: restructure user service")
 * perf     - Performance improvements (e.g., "perf: optimize database queries")
 * test     - Adding or modifying tests (e.g., "test: add unit tests for user service")
 * build    - Changes affecting build system or dependencies (e.g., "build: update webpack config")
 * ci       - Changes to CI configuration files and scripts (e.g., "ci: add GitHub actions")
 * chore    - Other changes that don't modify src or test files (e.g., "chore: update .gitignore")
 *
 * Format: type(scope?): subject
 * Examples:
 *   feat(auth): add Google OAuth login
 *   fix(api): handle null response from server
 */
export default { extends: ["@commitlint/config-conventional"] };
