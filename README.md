# vscode-polyglot

VS Code extension for [polyglot-lang](https://github.com/Tony123-tech/Polyglot-lang).

## Features

- Syntax highlighting for .poly files
- Keyword, type, and macro autocompletion
- Language configuration (brackets, comments, indentation)

## Install

    code --install-extension polyglot-lang-0.1.0.vsix

Or: Extensions -> Install from VSIX... -> select polyglot-lang-0.1.0.vsix

## Development

    npm install
    npm run compile
    npx @vscode/vsce package
