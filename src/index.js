const PORT = process.env.PORT || 3333

import express from 'express'
import path from 'path'

import apiRouter from './routes/api.js'

const app = express()

app.use(express.json())

app.use('/api', apiRouter)

app.use(express.static(path.join(path.resolve('src', 'public'))))
app.use(express.static(path.join(path.resolve('src', 'public', 'pages', 'update'))))

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})