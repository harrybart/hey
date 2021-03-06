module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      // "prettier",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint",
    ],
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "settings": {
      "react": {
        "version": "latest"
      }
    },
    "overrides": [
      {
        "files": ["*.js"],
        "rules": {
          "@typescript-eslint/explicit-module-boundary-types": "off"
        }
      }
    ],
    "rules":{
      '@typescript-eslint/no-var-requires': 0,
    }
  }