const scss = require('svelte-preprocess').scss;

const config = {
  preprocess: [
    scss({}),
  ]
}

module.exports = config;
