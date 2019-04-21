// const fs = require('fs');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-fb-customerchat/'
    : '/',
  outputDir: 'docs',
  devServer: {
    open: true,
    // host: '127.0.0.1',
    // hotOnly: false,
    // port: 8080,
    // https: {
    //   key: fs.readFileSync('./.certs/localhost.key'),
    //   cert: fs.readFileSync('./.certs/localhost.crt'),
    //   // ca: fs.readFileSync('./.certs/ca.crt'),
    // },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false
}
