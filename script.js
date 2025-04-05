// Elements obtained from the DOM
const counter = document.getElementById("counter")
const contenedor2 = document.getElementById("contenedor2");
const searchBox = document.getElementById("busqueda");// Upon page load

// Upon page load
updateCartCounter() // in case there are books left in the cart
let books = []

// Functions
function fetchBooks() {
    fetch(`https://openlibrary.org/search.json?q=${searchBox.value}&limit=10`)
        .then((resp) => resp.json())
        .then((data) => {
            books = data.docs
            mostrarResultados(books)
    })
}

function mostrarResultados(books) {
    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        const card = document.createElement("div");
        card.classList.add("card");
        const imageURL = `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`;
        const authors = book.author_name.join(", ");
        card.innerHTML = `
                    <div class="card-image">
                        <img src="${imageURL}" alt="${book.title}">
                    </div>
                    <div class="card-content">
                        <h2 class="card-title">${book.title}</h2>
                        <p><i>${authors}</i> (${book.first_publish_year})</p>
                        <p><button id="${index}" onclick="addToCart(${index})">Añadir al carrito</button></p>
                    </div>
                `;
        contenedor2.appendChild(card);
    }
    if (books) {
        contenedor2.classList.remove("hidden")
    }
}

function getCartBooks() {
    if (!localStorage.cart) {
        localStorage.cart = '[]'
    }
    let bookCart = JSON.parse(localStorage.cart);
    return bookCart;
}

function addToCart(index) {
    // The book to add to the cart is books[index]
    // First get the cart contents
    let cart = getCartBooks()
    cart.push(books[index])
    localStorage.cart = JSON.stringify(cart)
    updateCartCounter()
}

function updateCartCounter() {
    let cart = getCartBooks()
    const cartBookCount =cart.length
    counter.innerText = cartBookCount
}

// mostrarResultados()
// 
