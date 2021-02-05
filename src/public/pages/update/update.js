function updatePost() {
    const id = localStorage.getItem('id')
    let titleElement = document.getElementById('title').value
    console.log(titleElement)
    let descriptionElement = document.getElementById('description').value
    console.log(descriptionElement)
    fetch(`${baseURL}/update/${id}`, {
        method: 'PUT',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            title: titleElement,
            description: descriptionElement
        })
    })
    .then(() => {
        window.location.href = `/`    
    })
}