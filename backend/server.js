const express = require('express');
const app = express();
const port = 8080;
const axios = require('axios');

app.get('/posts', (req, res) => {

  axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      res.json(response.data)
    })
})

app.listen(port, () => {
  console.log(`👋 Listening at http://localhost:${port}`)
})

module.exports = app