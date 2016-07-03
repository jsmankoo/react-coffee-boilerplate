path = require 'path'
express = require 'express'

app = express()

app.set 'views', './views'
app.set 'view engine', 'pug'

app.use express.static './public'

app.get '/', (req, res)->
  res.render 'index'

app.listen 3000, ()->
  console.log "App started on port:3000"
