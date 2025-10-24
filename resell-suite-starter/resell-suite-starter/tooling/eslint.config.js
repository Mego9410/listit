
// Simple flat ESLint config
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [{
  files: ["**/*.{ts,tsx}"],
  languageOptions: { 
    parser: typescriptParser,
    ecmaVersion: 2022, 
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  plugins: {
    '@typescript-eslint': typescriptEslint
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "off"
  }
}, {
  files: ["**/*.{js,jsx}"],
  languageOptions: { 
    ecmaVersion: 2022, 
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}];
