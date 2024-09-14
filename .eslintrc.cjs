module.exports = {
  env: {
    // Set ES2022 environment
    es2022: true,
  },

  extends: [
    // Use Next.js core web vitals rules
    "next/core-web-vitals",

    // Use recommended eslint rules
    "eslint:recommended",

    // Use recommended typescript-eslint rules
    "plugin:@typescript-eslint/recommended",

    // Turn off rules that might conflict with Prettier
    "prettier",
  ],

  overrides: [
    {
      // Apply rules to generated types
      files: ["*.d.ts"],
      rules: {
        // Allow empty object types
        "@typescript-eslint/ban-types": [
          "error",
          {
            extendDefaults: true,
            types: {
              "{}": false,
            },
          },
        ],
      },
    },
  ],

  // Use typescript-eslint parser
  parser: "@typescript-eslint/parser",

  parserOptions: {
    // Allow ES2022 syntax
    sourceType: "module",
  },

  plugins: [
    // Support typescript-eslint
    "@typescript-eslint",
  ],

  // Ignore configuration files in directories above this one
  root: true,

  rules: {
    // Allow anonymous default exports
    "import/no-anonymous-default-export": "off",

    // Allow empty block statements
    "no-empty": "off",

    // Allow empty destructuring patterns
    "no-empty-pattern": "off",
  },
};
