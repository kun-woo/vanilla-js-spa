module.exports = {
  rootDir: '../.',
  roots: [
    '<rootDir>/tests',
  ],
  collectCoverageFrom: [
    '<rootDir>/tests/**/*.{js}'
  ],
  testMatch: [
    '<rootDir>/tests/*.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  modulePaths: [],
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
    'public/(.*)': '<rootDir>/public/$1',
    'src/(.*)': '<rootDir>/src/$1'
  },
  moduleFileExtensions: [
    'js',
  ],
  verbose: true,
};
