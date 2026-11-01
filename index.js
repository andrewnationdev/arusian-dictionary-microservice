const express = require('express')
const dictionary = require('./data/dictionary.json')
const app = express()
const port = 3000

app.get('/dictionary', (req, res) => {
  res.send(dictionary)
})

app.get('/length', (req, res) => {
  res.send({ "length": dictionary.length})
})

app.get('/', (req, res) => {
  res.send('Arusian Dictionary Microservice')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
