import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import globals from 'globals';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      jest,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'jest/valid-expect': 'warn',
      'jest/expect-expect': 'warn',
    },
  },
];