import { register } from 'esbuild-register/dist/node'
register({
  target: 'node16',
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const createPages = require('./src/gatsby-node').createPages
