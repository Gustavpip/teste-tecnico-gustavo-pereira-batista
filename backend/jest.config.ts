/** @type {import('jest').Config} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  coverageDirectory: "coverage",
  collectCoverage: false,
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};
