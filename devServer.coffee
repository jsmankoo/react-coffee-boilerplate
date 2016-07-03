path = require 'path'
express = require 'express'
stylus = require 'stylus'
axis = require 'axis'
rupture = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'

webpack = require 'webpack'
config = require './webpack.config.dev'
devMiddleware = require 'webpack-dev-middleware'
hotMiddleware = require 'webpack-hot-middleware'

app = express()
compiler = webpack config

app.set 'views', './views'
app.set 'view engine', 'pug'

app.use stylus.middleware
  src: './public'
  compile: (str, path)->
    stylus str
      .set 'filename', path
      .use axis()
      .use rupture()
      .use autoprefixer()

app.use devMiddleware compiler,
  noInfo: true
  publicPath: config.output.publicPath
app.use hotMiddleware compiler

app.use express.static './public'

app.get '/', (req, res)->
  res.render 'index'

app.listen 3000, ()->
  console.log "App started on port:3000"
