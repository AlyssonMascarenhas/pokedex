const jestPreset = require('jest-preset-angular/jest-preset');
const { globals } = jestPreset;
const tsjest = globals['ts-jest'];
// set the correct path to the spect ts-config file
// the default for the jest-preset-angular package
// points to an incorrect path:
// <rootDir/src/tsconfig.spec.js
const tsjestOverrides = {
  ...tsjest,
  tsconfig: '<rootDir>/tsconfig.spec.json',
};
const globalOverrides = {
  ...globals,
  'ts-jest': { ...tsjestOverrides },
};

module.exports = {
  ...jestPreset,
  globals: { ...globalOverrides },
  preset: 'jest-preset-angular',
  testMatch: [
    '<rootDir>/**/*.spec.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  coverageReporters: ['html', 'json-summary', 'lcov', 'text'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
};