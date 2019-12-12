const Events = require('events');

module.exports = class ApiPost extends Events {
    command({url, payload, headers=null, auth=null, cb} = {}) {
        if (!url) {
            throw Error("Please provide a URL");
        }
        console.log(`Using url: ${url}`);

        let request = require("request");

        let options = {
            uri: url,
            method: "POST",
            json: payload
        };

        if (headers !== undefined) {
            options.headers = headers;
        }
        if (auth !== undefined) {
            options.auth = auth;
        }

        request(options, function (error, response) {
            if (error) {
                throw error
            }

            cb(response);
            this.emit('complete');
        }.bind(this));
    }
};