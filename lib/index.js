"use strict";

const Server = require('nomi-core').default;
const Env = require('nomi-env');
module.exports = {
  run: function() {
    new Server(Env.parseEnv());
  },
  env: Env.env
}

