module.exports = {
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",


    },
    parser: "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "commonjs": true
    },
    "globals": {},

    "rules": {
        "indent": ["error", 4]
    }
};