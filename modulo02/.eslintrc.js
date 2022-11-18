module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console":"off",
    "indent": "error",
    "class-methods-use-this": "off",
    "no-param-reassing": "off",
    camelcase: "off",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: 'next',
      },
    ],
  },
};
