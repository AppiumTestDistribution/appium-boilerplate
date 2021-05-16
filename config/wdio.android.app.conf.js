const { config } = require('./wdio.shared.conf');

config.specs = ['./tests/specs/**/app.*.spec.js'];
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'android',
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 9,
        // The path to the app
        'appium:app': 'https://github.com/webdriverio/native-demo-app/releases/download/0.2.1/Android-NativeDemoApp-0.2.1.apk',
    },
];

exports.config = config;
