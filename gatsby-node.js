const { register } = require("esbuild-register/dist/node")
register({
  target: "node16",
})

exports.createPages = require("./src/gatsby-node").createPages
