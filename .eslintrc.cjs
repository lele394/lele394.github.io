module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2024: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:mdx/recommended'
  ],
  plugins: ['mdx'],
  overrides: [
    {
      // Run the MDX processor on Markdown/MDX files so ESLint can lint code blocks
      files: ['**/*.mdx', '**/*.md'],
      processor: 'mdx/remark',
      settings: {
        'mdx/code-blocks': true,
      },
      rules: {
        // MDX files often import components used in JSX; disable unused-vars for them
        'no-unused-vars': 'off'
      }
    },
    {
      files: ['**/*.astro'],
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }
    }
  ],
  rules: {
    'no-console': 'off'
  }
};
