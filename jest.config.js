module.exports = {
  roots: ["<rootDir>/src"],
  coverageDirectory: "<rootDir>/src/__tests__/coverage/",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx,js}",
    "!<rootDir>/src/__tests__/**/*.{ts,tsx,js}"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "coverage"]
};
