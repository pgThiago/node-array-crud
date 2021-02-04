document.addEventListener('DOMContentLoaded', () => {
    listPosts()
})

let createPostButtonElement = document.getElementById('create-post-btn')
createPostButtonElement.disabled = true

/* prevent empty input from user */
let titleElement = document.getElementById('title')
let descriptionElement = document.getElementById('description')
titleElement.addEventListener('input', (firstEvent) => {
    descriptionElement.addEventListener('input', (secondEvent) => {
        titleElement.value !== '' && descriptionElement.value !== '' ? createPostButtonElement.disabled = false : createPostButtonElement.disabled = true
    })
})
/* ========================================================== */

function listPosts() {
    let postsElement = document.getElementById('posts')
    if(postsElement !== null)
        postsElement.innerHTML = ''
    fetch(`${baseURL}/posts`)
        .then(response => response.json()
            .then(data => {
                data.length !== 0 && postsElement !== null && (
                    data.map(dataItem => (
                        postsElement.innerHTML += 
                        `
                            <div class="card border-light mb-2" style="max-width: 50rem;" >
                                <div class="card-body text-dark">
                                        <h5 class="card-title">${dataItem.title}</h5>
                                    <p class="card-text">${dataItem.description}</p>
                                </div>
                            </div>
                            <button type="button" method="get" onclick="goToUpdatePage('${dataItem.id}')" class="btn btn-outline-success mb-5 me-2">Update</button>
                            <button type="button" onclick="deletePost('${dataItem.id}')" class="btn btn-outline-danger mb-5">Delete</button>                        
                        `
                    ))
                )
            })
        )
}

function createPost() {
    let titleElement = document.getElementById('title').value
    let descriptionElement = document.getElementById('description').value
    
    fetch(`${baseURL}/create`, {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            title: titleElement,
            description: descriptionElement
        })
    })
    .then(() => listPosts())
}

function deletePost(id) {
    fetch(`${baseURL}/delete/${id}`, {
        method: 'DELETE'
    })
    .then(() => listPosts())
}

/* ========================= Redirect to update post page ======================== */
function goToUpdatePage(id) {
    localStorage.setItem('id', id)
    window.location.href = `/update.html`
}
