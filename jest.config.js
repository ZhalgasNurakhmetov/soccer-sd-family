module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['jest-preset-angular', './jest.setup.js'],
  verbose: true,
  testMatch: ['**/?(*.)(spec).ts'],
  moduleDirectories: ['<rootDir>', 'node_modules', 'src'],
};
