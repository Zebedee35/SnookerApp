module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended"
  ],
  "env": {
    "browser": true,
    "jest": true,
    "react-native/react-native": true
  },
  "plugins": [
    "react",
    "react-native",
    "@typescript-eslint",
    "jsx-a11y",
    "import",
    "prettier",
    "jest",
    "eslint-comments"
  ],
  "rules": {
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "storybook/**/*.{ts,tsx,js}",
          "config-overrides.js",
          "src/setupTests.ts",
          "src/components/**/*.stories.tsx",
          "src/styles/**/*.stories.tsx",
          "src/**/*.test.{ts,tsx}"
        ]
      }
    ],
    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "error",
    "react/jsx-one-expression-per-line": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "prettier/prettier": ["error"]
  },
  "overrides": [
    {
      "files": ["*.style.ts"],
      "rules": {
        "@typescript-eslint/camelcase": "off"
      }
    },
    {
      "files": ["*.stories.tsx", "*.test.tsx"],
      "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "react-native/no-color-literals": "off",
        "react-native/no-inline-styles": "off"
      }
    }
  ]
}
// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
// };
