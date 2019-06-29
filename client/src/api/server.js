const axios = require('axios')
const ax = axios.create({
    baseURL : 'http://localhost:3000',
    headers : {
        access_token : localStorage.getItem('access_token')
    }
})

module.exports = ax