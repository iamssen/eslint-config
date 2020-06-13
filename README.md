# ESLint config

## Basic Usage

Install dependencies.

```sh
npm install eslint @ssen/eslint-config eslint-config-prettier --save-dev
```

Add this config into package.json

```json
{
  "eslintConfig": {
    "extends": [
      "@ssen",
      "prettier",
      "prettier/react",
      "prettier/@typescript-eslint"
    ]
  }
}
```