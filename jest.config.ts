module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>"],
  testMatch: [
    "<rootDir>/__tests__/**/*.test.tsx",
    "<rootDir>/__tests__/**/*.test.ts",
    "<rootDir>/__tests__/**/*.spec.ts",
    "<rootDir>/__tests__/**/*.spec.tsx",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Include all files under src directory
    "!src/**/*.d.ts", // Exclude declaration files
    "!src/setupTests.ts", // Exclude setupTests.ts
    "!src/**/__tests__/**", // Exclude test files
    "!src/**/__mocks__/**", // Exclude mock files
  ],
  coverageReporters: ["html", "text-summary"],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
  watch: false,
  testEnvironment: "jsdom",
};
