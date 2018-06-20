"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IDAChainApi = function () {
    function IDAChainApi(ws_rpc, api_name) {
        _classCallCheck(this, IDAChainApi);

        this.ws_rpc = ws_rpc;
        this.api_name = api_name;
    }

    IDAChainApi.prototype.init = function init() {
        var self = this;
        return this.ws_rpc.call([1, this.api_name, []]).then(function (response) {
            //console.log("[IDAChainApi.js:11] ----- IDAChainApi.init ----->", this.api_name, response);
            self.api_id = response;
            return self;
        });
    };

    IDAChainApi.prototype.exec = function exec(method, params) {
        return this.ws_rpc.call([this.api_id, method, params]).catch(function (error) {
            console.log("!!! IDAChainApi error: ", method, params, error, JSON.stringify(error));
            throw error;
        });
    };

    return IDAChainApi;
}();

exports.default = IDAChainApi;
module.exports = exports["default"];