const baseConfig = require("./globals.js");
const envConfig = require("./envs.config.js");

//Add dev specific global values here

const conf = {
    ...baseConfig,
    ui_url: envConfig.dev.ui_url,
    backend_url: envConfig.dev.backend_url
};

module.exports = conf;