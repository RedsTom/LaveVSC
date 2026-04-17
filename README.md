# Lave Language Support

This VS Code extension provides comprehensive language support for the Lave programming language, a French-inspired language for algorithmic programming.

## Features

- **Syntax Highlighting**: Full syntax highlighting based on the Lave grammar.
- **Language Configuration**: Proper handling of comments, brackets, and indentation.
- **LSP Integration**: Connects to a Language Server Protocol (LSP) server for advanced features:
  - Intelligent code completions
  - Real-time diagnostics and error reporting
  - Hover information and more

## Lave Language

Lave is a programming language designed for teaching algorithms and programming concepts. It uses French keywords and supports structures like algorithms, loops, conditionals, and data types.

Key features of Lave:
- Control structures: `si` (if), `tant que` (while), `pour` (for), etc.
- Data types: integers, strings, booleans, arrays, structs
- Functions and procedures
- Arithmetic and logical operations

See `lave.bnf` for the complete grammar definition.

## Installation

1. Install the extension from the VS Code Marketplace or build it from source.
2. Ensure the Lave LSP server (`testlsp.exe`) is placed in a `server/` directory relative to the extension.

## Usage

1. Open a file with the `.lave` extension in VS Code.
2. The extension will automatically activate and provide language support.
3. Write Lave code and enjoy syntax highlighting and LSP features.

## Development

To contribute or build the extension locally:

1. Clone this repository.
2. Run `pnpm install` to install dependencies.
3. Run `pnpm run compile` to build the TypeScript code.
4. Press F5 in VS Code to launch the Extension Development Host.
5. Test the extension with `.lave` files.

## Project Structure

```
.
├── src/
│   └── extension.ts              # Main extension code (LSP client)
├── syntaxes/
│   └── lave.tmLanguage.json      # TextMate grammar for syntax highlighting
├── language-configuration.json   # Language-specific settings
├── lave.bnf                      # Lave grammar in BNF notation
├── package.json                  # Extension manifest
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # Linting configuration
├── .vscode/                      # VS Code workspace settings
├── scripts/                      # Build and test scripts
└── README.md                     # This file
```

## Requirements

- VS Code 1.100.0 or later
- Node.js and pnpm for development
- Lave LSP server executable

## License

MIT License - see package.json for details.
