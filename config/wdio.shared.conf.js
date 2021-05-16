exports.config = {
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        helpers: [require.resolve('@babel/register')],
    },
    sync: true,
    logLevel: 'info',
    path: '/wd/hub',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryCount: 0,
    reporters: ['spec'],

    // ====================
    // Appium Configuration
    // ====================
    // services: [
    //     [
    //         "appium",
    //         {
    //             // For options see
    //             // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    //             args: {
    //                 // Auto download ChromeDriver
    //                 relaxedSecurity: true,
    //                 logPath: "./",
    //                 plugins: "element-wait,device-manager",
    //                 "base-path": "/wd/hub",
    //                 // chromedriverAutodownload: true,
    //                 // For more arguments see
    //                 // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    //             },
    //             command:
    //                 "/Users/saikrisv/.node/lib/node_modules/appium/build/lib/main.js",
    //         },
    //     ],
    // ],
    port: 4723,
};
