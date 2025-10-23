import js from '@eslint/js'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import vitestGlobals from 'eslint-plugin-vitest-globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'vitest-globals': vitestGlobals,
    },
    languageOptions: {
      globals: {
        ...vitestGlobals.environments.env.globals, // 👈 test, expect, describe, etc.
        browser: true,
        fetch: true,
        es2020: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'on',

      // ✅ Règles React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',

      // ✅ Accessibilité
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': 'warn',

      // ✅ Imports
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external', 'internal']],
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': 'off',
    },
  },
]
