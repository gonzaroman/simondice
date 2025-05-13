// eslint.config.mjs
export default [
  // ...tus otros bloques de configuración

  // Integra Prettier
  {
    files: ['*.js', '*.ts', '*.jsx', '*.tsx', '*.css', '*.scss', '*.json', '*.md'],
    plugins: {
      prettier: {},
    },
    extends: [
      'prettier'
    ],
    rules: {
      // Activa las reglas de prettier como errores de ESLint:
      'prettier/prettier': 'error'
    },
  },
];
