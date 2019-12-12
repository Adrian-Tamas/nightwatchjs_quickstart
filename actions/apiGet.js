const Events = require('events');

module.exports = class ApiGet extends Events {
    command(url, cb) {
        if (!url) {
            throw Error("Please provide a URL");
        }
        console.log(`Using url: ${url}`);

        let request = require("request");

        request.get(url, function (error, response) {
            if (error) {
                throw error;
            }

            cb(response);
            this.emit('complete');
        }.bind(this));
    }
};
