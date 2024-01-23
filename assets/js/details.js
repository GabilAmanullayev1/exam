let details = document.querySelector('.details')
let id = new URLSearchParams(window.location.search).get('id')
fetch(`http://localhost:3000/services/${id}`)
    .then(Response => Response.json())
    .then(data => {
        details.innerHTML = `
    <img src="${data.image}">
    <p>${data.description}</p>
    <p>${data.title}</p>
    <p>${data.price}</p>
    `
    })
