const baseConfig = require("./nightwatch.conf.js");
const envConfig = require("./envs.config.js");

const conf = {
    ...baseConfig
};

conf.test_settings.default.launch_url = envConfig.dev.ui_url;
conf.globals_path = "globals.dev.js";

module.exports = conf;