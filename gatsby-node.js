/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
'use strict'
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'esnext',
    },
})
exports.createPages = require('./gatsby-node/index').createPages