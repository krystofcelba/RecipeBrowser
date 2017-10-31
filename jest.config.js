module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverage: false,
  mapCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  modulePaths: ['<rootDir>'],
  globals: {
    __DEV__: true,
    'ts-jest': {
      useBabelrc: true,
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: './setupTests.js',
};
