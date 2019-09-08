module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
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
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx", ".spec.js"]
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'react/no-danger': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-cycle': 0,
  },
  parser: "babel-eslint"
};
