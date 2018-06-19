const express = require('express')
const axios = require('axios')
const router = express.Router()


router.route('/news').get((request, response) =>{
    var request = axios
    .get('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=5c4657765e7840b4ab58ce1308f09197')
    .then((httpResponse) => response.send(httpResponse.data))
})


module.exports = router
