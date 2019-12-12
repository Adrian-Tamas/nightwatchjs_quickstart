const baseConfig = require("./nightwatch.conf.js");
const envConfig = require("./envs.config.js");

const conf = {
    ...baseConfig
};

conf.test_settings.default.launch_url = envConfig.test.ui_url;
conf.globals_path = "globals.test.js";

module.exports = conf;