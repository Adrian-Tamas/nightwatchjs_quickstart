const baseConfig = require("./globals.js");
const envConfig = require("./envs.config.js");

//Add test specific global values here

const conf = {
    ...baseConfig,
    ui_url: envConfig.test.ui_url,
    backend_url: envConfig.test.backend_url
};

module.exports = conf;