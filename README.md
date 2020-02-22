# ESLint config

## Basic Usage

Install dependencies.

```sh
npm install eslint @lunit/eslint-config eslint-config-prettier --save-dev
```

Add this config into package.json if the project is a React application.

```json
{
  "eslintConfig": {
    "extends": [
      "@lunit",
      "prettier",
      "prettier/react",
      "prettier/@typescript-eslint"
    ]
  }
}
```

Or add this config into package.json if the project is not a React application. (like a Node.js application)

```json
{
  "eslintConfig": {
    "extends": [
      "@lunit/eslint-config/without-react",
      "prettier",
      "prettier/@typescript-eslint"
    ]
  }
}
```  
