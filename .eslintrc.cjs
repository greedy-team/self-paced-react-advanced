module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks", // 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'가 여기에 포함됩니다.
    "airbnb",
    "airbnb/hooks", // 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'가 여기에 포함됩니다.
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    'linebreak-style': 0,
    "react/react-in-jsx-scope": "off",
    'jsx-a11y/label-has-associated-control': 'off', 
     "react/jsx-no-target-blank": "off",
    'linebreak-style': 0,
    "react/react-in-jsx-scope": "off",
    'jsx-a11y/label-has-associated-control': 'off', 
     "react/jsx-no-target-blank": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/label-has-for": "off", // <label> 태그가
    //  HtmlFor 값과 input id 값을 연결해서 control을 연결하는 방식과 
    //  for 속성 또는 htmlFor 속 컨트롤할 input 요소를 감싸는 두 방식 중 첫번째 방식을 준수하지만 두번째방식은 태그 구조가 달라져 
    //예외처리 하기로 함
  },
};
