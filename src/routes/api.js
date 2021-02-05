import express from 'express'
import posts from '../model/posts.js'

const router = express.Router()

router.get('/posts', (request, response) => {
    return response.json(posts.index())
})

router.post('/create', (request, response) => {
    const { title, description } = request.body
    posts.create(title, description)

    return response.status(201).send({ msg: 'Post created successfully' })
})

router.put('/update/:id', (request, response) => {
    const { id } = request.params
    const { title, description } = request.body
    posts.update(id, title, description)

    return response.status(200).send('Post updated successfully')
})

router.delete('/delete/:id', (request, response) => {
    const { id } = request.params
    posts.delete(id)

    return response.status(200).send('Post deleted successfully')
})

export default router