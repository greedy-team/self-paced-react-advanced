module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "linebreak-style": "off",
    "no-alert": "off",
    "react/jsx-no-target-blank": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": 
      ["warn", { allowConstantExport: true }],
    "jsx-a11y/label-has-associated-control": 
      ["error",{ "required": { "some": ["nesting", "id"] } }],
    "import/no-extraneous-dependencies": 
      ["error",{devDependencies: ["**/vite.config.*", "**/vitest.config.*", "**/eslint.config.*", "**/*.config.js", ],},],
  },
};
