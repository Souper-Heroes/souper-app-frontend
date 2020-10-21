module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": 0,
    "comma-dangle": 0,
    "max-len": [2, 150],
    "arrow-parens": [2, "as-needed"],
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/no-unescaped-entities": 0,
    "no-alert": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,
    "no-underscore-dangle": 0,
    "func-names": 0,
    "no-restricted-syntax": 0,
    "no-param-reassign": 0,
    "react-hooks/exhaustive-deps": 0
  },
};
