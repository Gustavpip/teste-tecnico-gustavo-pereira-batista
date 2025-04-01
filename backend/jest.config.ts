/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest', // Para transformar arquivos .ts com ts-jest
  },
  moduleNameMapper: {
    // Mapeia a extensão .ts corretamente
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  coverageDirectory: 'coverage',
  collectCoverage: false, // Habilita a coleta de cobertura
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // Para localizar arquivos de teste
};
