// Elements obtained from the DOM
const contenedor1 = document.getElementById("contenedor1");
const contenedor2 = document.getElementById("contenedor2");
const contenedor3 = document.getElementById("contenedor3");
const searchBox = document.getElementById("busqueda");
const counter = document.getElementById("counter");

// Upon page load…
let books = [];
updateCartCounter(); // In case there are books left in the cart from a previous session

// Functions
function fetchBooks() {
    let opcion = document.querySelector('input[name="filtro"]:checked').value;
    console.log(opcion);
    fetch(
        `https://openlibrary.org/search.json?${opcion}=${searchBox.value}&limit=10`
    )
        .then((resp) => resp.json())
        .then((data) => {
            contenedor2.innerHTML = "";
            books = data.docs;
            mostrarResultados(books);
        });
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
    contenedor2.classList.remove("hidden");
}

function getCartBooks() {
    if (!localStorage.cart) {
        localStorage.cart = "[]";
    }
    let cart = JSON.parse(localStorage.cart);
    return cart;
}

function addToCart(index) {
    // The book to add to the cart is books[index]
    // First get the cart contents
    let cart = getCartBooks();
    cart.push(books[index]);
    localStorage.cart = JSON.stringify(cart);
    updateCartCounter();
}

function updateCartCounter() {
    let cart = getCartBooks();
    counter.innerText = cart.length;
}

function viewCart() {
    contenedor1.classList.add("hidden");
    contenedor2.classList.add("hidden");
    contenedor3.classList.remove("hidden");
}

// mostrarResultados()
