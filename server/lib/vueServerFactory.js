'use strict';
var env_1 = require('../../env');
var vueServer = require('vue-server');
var Vue = new vueServer.renderer();
Vue.config.debug = !(env_1.config.NODE_ENV == 'product');
Vue.config.silent = (env_1.config.NODE_ENV == 'product');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Vue;
//# sourceMappingURL=vueServerFactory.js.map