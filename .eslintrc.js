module.exports = {
  root: true, // Projenin kök dizini olduğunu belirtir
  parser: '@typescript-eslint/parser', // TS parser kullanılır
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX desteği açılır
    },
    ecmaVersion: 2021, // Modern JS özellikleri
    sourceType: 'module', // ES modülleri kullanılıyor
  },
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true, // react-native ortamı için
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Prettier önerileri ve uyumu
  ],
  rules: {
    // Kullanılmayan değişkenler sadece uyarı olarak gösterilsin
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-unused-vars': 'warn',

    // Prettier ile çatışan ESLint kurallarını kapat
    'prettier/prettier': ['error'],

    // React Native ile ilgili bazı öneriler / zorunluluklar
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'off',

    // React spesifik kurallar
    'react/prop-types': 'off', // TS ile prop-types kullanmaya gerek yok
    'react/react-in-jsx-scope': 'off', // React 17+ için gerek yok

    // Kendi istediğin diğer kuralları ekleyebilirsin
  },
  settings: {
    react: {
      version: 'detect', // React sürümü otomatik algılanır
    },
  },
};
