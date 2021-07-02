const axios = require('axios')

const instance = axios.create({
    baseUrl: 'http://www.laapp.com'
})

module.exports = axios

// inyección de dependencias