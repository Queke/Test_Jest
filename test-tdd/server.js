const express = require('express')
const axios = require('axios')
const parser = require('body-parser')
const {users} = require('./endpoints')
const app = express()
const port = 3000



// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))
 
// parse application/json
app.use(parser.json())

const usersHandler = users ({axios})

app.get('/', usersHandlers.get)
app.post('/', usersHandlers.post)
app.put('/:id', usershandlers.put)
app.delete('/:id', usershandlers.delete)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}!`)
})

