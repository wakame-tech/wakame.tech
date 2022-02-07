const { register } = require("esbuild-register/dist/node")
register({
  target: "node16",
})
module.exports = require("./src/gatsby-config.ts")
