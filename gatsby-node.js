'use strict'
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'esnext',
    },
})
exports.createPages = require('./src/gatsby-node').createPages