require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/bala', (req, res) => {
    res.send('Har Har Mahadev!')
  })
  app.get('/balalove', (req, res) => {
    res.send('I love You Jasreen !')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 