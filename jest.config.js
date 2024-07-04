module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-html-reporter', {
      outputPath: './test-report/index.html'
    }]
  ]
};
