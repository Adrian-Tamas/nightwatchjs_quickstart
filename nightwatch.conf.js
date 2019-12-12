const seleniumServer = require("selenium-server");
const chromeDriver = require("chromedriver");
const geckoDriver = require("geckodriver");

let SELENIUM_CONFIGURATION = {
    start_process: true,
    server_path: seleniumServer.path,
    port: 4444
};

let FIREFOX_CONFIGURATION = {
    browserName: 'firefox',
    javascriptEnabled: true,
    acceptSslCerts: true,
    marionette:true,
    acceptInsecureCerts: true,
    firefoxOptions: {
        args: [
            // '-headless',
            '-verbose'
        ],
    }
};

let CHROME_CONFIGURATION = {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true,
    chromeOptions: {
        args : ["--no-sandbox"],
        w3c: false
    }
};

let DEFAULT_CONFIGURATION = {
    selenium_port: 4444,
    request_timeout_options: {
        timeout: 60000,
        retry_attempts: 2
    },
    test_runner : {
        type : "mocha",
        options : {
            ui : "bdd",
            reporter : "list"
        }
    },
    desiredCapabilities: CHROME_CONFIGURATION
};

let FIREFOX_ENV = Object.assign({}, DEFAULT_CONFIGURATION, {
    desiredCapabilities: FIREFOX_CONFIGURATION
});

let ENVIRONMENTS = {
    default: DEFAULT_CONFIGURATION,
    firefox: FIREFOX_ENV,
    chrome: DEFAULT_CONFIGURATION
};

module.exports = {
    src_folders: ['tests'],
    page_objects_path: 'pages',
    custom_commands_path: "actions",
    custom_assertions_path: "assertions",
    globals_path: 'globals.js',
    webdriver: {
        default_path_prefix: "/wd/hub",
        start_process: true,
        cli_args: {
            "webdriver.gecko.driver": geckoDriver.path,
            "webdriver.chrome.driver": chromeDriver.path,
            "webdriver.ie.driver": "",
            "webdriver.firefox.profile": ""
        }
    },
    selenium: SELENIUM_CONFIGURATION,
    test_settings: ENVIRONMENTS
};