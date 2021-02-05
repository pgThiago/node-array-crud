import { generateID } from '../utils/generateId.js'

export default {
    posts: [],

    index() {
        return this.posts
    },

    create(title, description) {
        const postExists = this.posts.find(post => post.title === title)
        if(postExists)
            return

        this.posts.push({ id: generateID(), title, description })
    },

    update(id, title, description) {
        const newPostData = {
            id, title, description
        }
        const indexOfPostToBeUpdated = this.posts.findIndex(post => post.id === id)
        this.posts.splice(indexOfPostToBeUpdated, 1, newPostData)
    },

    delete(id) {
        const indexOfPostToBeDeleted = this.posts.findIndex(post => post.id === id)
        this.posts.splice(indexOfPostToBeDeleted, 1)
    },
}