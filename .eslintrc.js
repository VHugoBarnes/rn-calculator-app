module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": 0
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-useless-catch": ["off", "always"],
        eqeqeq: ["error", "smart"],
        "no-var": ["error"],
        "react-native/no-inline-styles": 0,
      },
    },
  ],
};