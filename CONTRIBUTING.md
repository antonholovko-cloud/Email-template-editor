# Contributing to ngx-wysiwyg-editor

First off, thank you for taking the time to contribute! 🎉

This document outlines how to propose changes, report issues, and get your work
merged into the project. By participating, you agree to abide by our
[Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [License](#license)

## Ways to Contribute

- Report bugs and request features via [GitHub Issues](https://github.com/antonholovko-cloud/Email-template-editor/issues)
- Improve documentation (including this file and the README)
- Fix open issues or implement requested features
- Add or improve tests

## Reporting Bugs

Before opening a bug report, please:

1. Search [existing issues](https://github.com/antonholovko-cloud/Email-template-editor/issues)
   to avoid duplicates.
2. Use the **Bug Report** issue template and fill in as much detail as possible.
3. Include a minimal reproduction, the Angular version, the library version, and
   your browser/OS where relevant.

## Suggesting Enhancements

Feature requests are welcome. Please use the **Feature Request** issue template
and describe the problem you are trying to solve, not just the solution you have
in mind. This helps us find the best approach together.

## Development Setup

**Prerequisites**

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (bundled with Node.js)

**Getting started**

```bash
# 1. Fork and clone the repository
git clone https://github.com/<your-username>/Email-template-editor.git
cd Email-template-editor

# 2. Install dependencies
npm install

# 3. Run the demo app with live reload
npm start
# then open http://localhost:4200

# 4. Build the library
npm run build:lib

# 5. Run the library tests
npm run test:lib
```

## Project Structure

```
projects/
  ngx-wysiwyg-editor/   # The publishable Angular library
  demo/                 # Demo application used for local development
scripts/                # Build, versioning, and release helper scripts
```

## Making Changes

1. Create a branch off `main`:
   ```bash
   git checkout -b feat/short-description
   ```
2. Make your changes, keeping commits focused and self-contained.
3. Add or update tests for any behavior you change.
4. Ensure the library builds and tests pass:
   ```bash
   npm run build:lib
   npm run test:lib
   ```
5. Format your code (Prettier config lives in `package.json`).

## Commit Messages

Please write clear, descriptive commit messages. We recommend the
[Conventional Commits](https://www.conventionalcommits.org/) style:

```
feat: add support for custom toolbar buttons
fix: correct cursor position after paste
docs: update installation instructions
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

## Pull Request Process

1. Push your branch and open a pull request against `main`.
2. Fill in the pull request template completely.
3. Link any related issues (e.g. `Closes #123`).
4. Make sure CI passes and there are no merge conflicts.
5. A maintainer will review your PR. Please be responsive to feedback — small,
   iterative changes are easier to review and merge.

Please **do not** bump the package version or edit `CHANGELOG`-style version
metadata in your PR; releases are handled by maintainers.

## Coding Standards

- Follow the existing code style and the `.editorconfig` in the repository.
- Use the project's Prettier settings (`printWidth: 100`, single quotes).
- Keep public APIs backwards-compatible where possible; call out breaking
  changes explicitly in your PR description.
- Prefer clear, self-documenting code and add comments only where intent is not
  obvious.

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](LICENSE) that covers this project.
