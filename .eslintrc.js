module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": "airbnb",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/destructuring-assignment": [0, "never"],
    "class-methods-use-this": [0, "never"],
    "jsx-a11y/label-has-for": [2, {
      "components": ["Label"],
      "required": {
        "some": ["nesting", "id"]
      },
      "allowChildren": false,
    }],
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],
  }
};
