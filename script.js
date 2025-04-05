// Elements obtained from the DOM
const contenedor1 = document.getElementById("contenedor1");
const contenedor2 = document.getElementById("contenedor2");
const contenedor3 = document.getElementById("contenedor3");
const searchBox = document.getElementById("busqueda");
const counter = document.getElementById("counter");
const purchaseProcessedModal = document.getElementById("purchase-processed");
const purchaseSuccess = document.getElementById("purchase-success-message");
const purchaseSuccessClose = document.getElementById("purchase-success-modal-close");

// Upon page load…
let books = [];
updateCartCounter(); // In case there are books left in the cart from a previous session
window.onclick = function(event) {
    if (event.target == purchaseProcessedModal) {
        purchaseProcessedModal.classList.add("hidden");
    }
}

  
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
                        <span><button id="Add${index}" class="add-button" onclick="addToCart(${index})">Añadir al carrito</button><button id="Del${index}" class="del-button hidden" onclick="deleteFromCart(${index})">Eliminar del carrito</button></span>
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
    const addButton = document.getElementById(`Add${index}`);
    const delButton = document.getElementById(`Del${index}`);
    // First get the cart contents
    let cart = getCartBooks();
    if (!books[index].purchaseQuantity) {
        books[index].purchaseQuantity = 0
    }
    books[index].purchaseQuantity++
    cart.push(books[index]);
    localStorage.cart = JSON.stringify(cart);
    updateCartCounter();
    addButton.classList.add("hidden");
    delButton.classList.remove("hidden");
}

function deleteFromCart(index) {
    // The book to delete from the cart is books[index]
    const addButton = document.getElementById(`Add${index}`);
    const delButton = document.getElementById(`Del${index}`);
    // First get the cart contents
    let cart = getCartBooks();
    books[index].purchaseQuantity = 0
    // We have to find this book in the cart
    for (let cartIndex = 0; cartIndex < cart.length; cartIndex++) {
        if (books[index].key === cart[cartIndex].key) {
            cart.splice(cartIndex, 1);
            break;
        }
    }
    localStorage.cart = JSON.stringify(cart);
    updateCartCounter();
    addButton.classList.remove("hidden");
    delButton.classList.add("hidden");
}

function updateCartCounter() {
    let cart = getCartBooks();
    counter.innerText = cart.length;
}

function viewCart() {
    // Get items from the cart
    const cartItems = getCartBooks();
    const bookTitle = Array();
    const bookImage = Array();
    const bookQuantity = Array();
    console.log(cartItems);

    cartItems.forEach((book) => {
        bookTitle.push(book.title);
        bookImage.push(
            `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`
        );
        bookQuantity.push(findBookQuantity(book.title));
    });
    console.log(bookTitle, bookImage, bookQuantity);

    // Hide containers 1 & 2 and unhide container 3
    contenedor1.classList.add("hidden");
    contenedor2.classList.add("hidden");
    contenedor3.classList.remove("hidden");
}

function findBookQuantity(title_book) {
    let countBook = 0;
    const books = getCartBooks()
    books.forEach((book) => {
        if (book.title == title_book) {
            countBook++
        }
    });
    return countBook
}

function processPurchase() {
    const books = getCartBooks()
    let numberOfBooks = 0
    books.forEach((book) => {
        numberOfBooks += book.purchaseQuantity
    })
    purchaseSuccess.innerHTML = `
    <h2>¡CHA-CHING!</h2>
    <br />
    <p>Compra realizada con éxito</p>
    <p>Ha comprado un total de ${numberOfBooks} libros</p>
    <p>Hemos vaciado su cuenta corriente</p>
    `
    purchaseProcessedModal.classList.remove("hidden");
}

function closePurchaseSuccessModal(params) {
    purchaseProcessedModal.classList.add("hidden");
}

