const PORT = process.env.port || 3333

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const apiRouter = require('./routes/api')

const app = express()

app.use(bodyParser.json())

app.use('/api', apiRouter)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public', 'pages', 'update')))

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`)
})