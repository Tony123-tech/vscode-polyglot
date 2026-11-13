import * as vscode from "vscode";

const KEYWORDS = [
  "fn",
  "let",
  "mut",
  "struct",
  "enum",
  "impl",
  "trait",
  "use",
  "mod",
  "pub",
  "const",
  "static",
  "type",
  "where",
  "as",
  "unsafe",
  "dyn",
  "if",
  "else",
  "while",
  "for",
  "in",
  "loop",
  "break",
  "continue",
  "match",
  "return",
  "async",
  "await",
  "true",
  "false",
  "self",
  "Self",
  "None",
  "Some",
  "Ok",
  "Err",
];

const TYPES = [
  "i8",
  "i16",
  "i32",
  "i64",
  "i128",
  "u8",
  "u16",
  "u32",
  "u64",
  "u128",
  "isize",
  "usize",
  "f32",
  "f64",
  "bool",
  "char",
  "str",
  "String",
  "Vec",
  "HashMap",
  "BTreeMap",
  "HashSet",
  "Option",
  "Result",
];

const MACROS = [
  "println!",
  "print!",
  "eprintln!",
  "eprint!",
  "format!",
  "write!",
  "vec!",
  "include!",
  "assert!",
  "assert_eq!",
  "assert_ne!",
];

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider(
    { language: "polyglot" },
    {
      provideCompletionItems(): vscode.CompletionItem[] {
        const items: vscode.CompletionItem[] = [];

        for (const kw of KEYWORDS) {
          const item = new vscode.CompletionItem(
            kw,
            vscode.CompletionItemKind.Keyword,
          );
          item.detail = "keyword";
          items.push(item);
        }

        for (const ty of TYPES) {
          const item = new vscode.CompletionItem(
            ty,
            vscode.CompletionItemKind.TypeParameter,
          );
          item.detail = "type";
          items.push(item);
        }

        for (const m of MACROS) {
          const item = new vscode.CompletionItem(
            m,
            vscode.CompletionItemKind.Function,
          );
          item.detail = "macro";
          items.push(item);
        }

        return items;
      },
    },
    ".",
  );

  context.subscriptions.push(provider);
}

export function deactivate() {}
