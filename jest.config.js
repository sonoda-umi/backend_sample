module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: './coverage/',
    collectCoverage: true,
    moduleNameMapper: {
      '^@src/(.*)$': '<rootDir>/src/$1',
      '^@test/(.*)$': '<rootDir>/test/$1'
    }
  }
  process.env = Object.assign({
    DUMMY: 'dummy',
  }, process.env);