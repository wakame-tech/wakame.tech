'use strict'
import path from "path"
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'esnext',
    },
})
exports.createPages = require(path.resolve(__dirname, 'src/gatsby-node')).createPages