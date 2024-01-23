let menu=document.querySelector('nav-menu')
let product = document.querySelector('.product')
let search = document.getElementById("search")
let sort = document.getElementById("sort")
let copyArr = []
let filteredArr = []
function getDataJson() {
    fetch(`http://localhost:3000/services`)
        .then(response => response.json())
        .then(data => {
            copyArr = data;
            product.innerHTML = ""
            filteredArr = filteredArr.length || search.value ? filteredArr : data;
            filteredArr.forEach(element => {
                product.innerHTML += `
            <div class="card">
            <div class="product-image"><img src="${element.image}" alt=""></div>
            <div class="product-text">
            <h4>${element.title}</h4>
            <p>${element.description}</p>
            <h5>$${element.price}</h5>
            </div>   
            <div class="product-button">
            <button><a href="details.html?id=${element.id}">Details</a></button>
            </div> 
            </div>
            `
            });

        })
}
getDataJson()
search.addEventListener("input", (e) => {
    filteredArr = copyArr
    filteredArr = filteredArr.filter((el) => {
        return el.title.toLowerCase().includes(e.target.value.toLowerCase());
    })
    getDataJson()
})
sort.addEventListener('change', (e) => {
    if (e.target.value === "des") {
        filteredArr.sort((a, b) => b.price - a.price)
    } else if (e.target.value === "asc") {
        filteredArr.sort((a, b)=> a.price - b.price)
    }
    else(
        filteredArr=[]
    )
    getDataJson()

})