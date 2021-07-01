const express = require('express')
const axios = require('axios')
const parser = require('body-parser')
const {posts} = require('./endpoints')
const {authenticate} = require('./middleware')
const app = express()
const port = 3000



// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))
 
// parse application/json
app.use(parser.json())

const postsHandler = users ({axios})

// app.get('/', usersHandlers.get)
app.post('/',authenticate, postHandlers.post)
// app.put('/:id', usershandlers.put)
// app.delete('/:id', usershandlers.delete)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}!`)
})

