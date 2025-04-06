// Elements obtained from the DOM
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const booksCart = document.getElementById("booksCart");
const searchBox = document.getElementById("search");
const counter = document.getElementById("counter");
const purchaseProcessedModal = document.getElementById("purchase-processed");
const purchaseSuccess = document.getElementById("purchase-success-message");
const purchaseSuccessClose = document.getElementById("purchase-success-modal-close");
const deleteCartBtn = document.getElementById("deleteCartBtn");
const buttonProcessCartBtn = document.getElementById("buttonProcessCartBtn");
const homeBtn = document.getElementById("homeBtn");

let books = [];
window.onclick = function(event) {
    if (event.target == purchaseProcessedModal) {
        purchaseProcessedModal.classList.add("hidden");
        main()
    }
}
main()

  
// Functions
function main() {
    // Upon page load…
    books = [];
    updateCartCounter(); // In case there are books left in the cart from a previous session
    container2.innerHTML = ""
    booksCart.innerHTML = ""
    container1.classList.remove("hidden");
    container2.classList.add("hidden");
    container3.classList.add("hidden");
    deleteCartBtn.classList.remove("hidden");
    buttonProcessCartBtn.classList.remove("hidden");
    homeBtn.classList.add("hidden");
}

function fetchBooks() {
    let option = document.querySelector('input[name="filter"]:checked').value;
    console.log(option);
    fetch(
        `https://openlibrary.org/search.json?${option}=${searchBox.value}&limit=10`
    )
        .then((resp) => resp.json())
        .then((data) => {
            container2.innerHTML = "";
            books = data.docs;
            showResults(books);
        });
}

function showResults(books) {
    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        const card = document.createElement("div");
        card.classList.add("card");
        const imageURL = `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`;
        let authors = ""
        if (book.author_name.length > 3) {
            authors = book.author_name.splice(0,3).join(", ") + ", <i>et al</i>."
        } else {
            authors = book.author_name.join(", ") + "."
        }
        card.innerHTML = `
            <div class="card-image">
                <img class="search-img" src="${imageURL}" alt="${book.title}">
            </div>
            <div class="card-content">
                <h2 class="card-title">${book.title}</h2>
                <p>${authors} (${book.first_publish_year})</p>
                <span><button id="Add${index}" class="blue-button" onclick="addToCart(${index})">Añadir al carrito</button><button id="Del${index}" class="red-button hidden" onclick="deleteFromSearch(${index})">Eliminar del carrito</button></span>
            </div>
        `;
        container2.appendChild(card);
    }
    container2.classList.remove("hidden");
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

function deleteFromSearch(index) {
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

function deleteFromCart(index) {
    // First get the cart contents
    let cart = getCartBooks();
    cart.splice(index, 1);
    localStorage.cart = JSON.stringify(cart);
    viewCart()
    updateCartCounter();
}

function deleteCart() {
    localStorage.cart = "[]"
    viewCart()
    updateCartCounter();
}

function updateCartCounter() {
    let cart = getCartBooks();
    counter.innerText = cart.length;
}

function viewCart() {
    booksCart.innerHTML = ""
    // Get items from the cart
    let cart = getCartBooks();
    if (cart.length == 0) {
        deleteCartBtn.classList.add("hidden");
        buttonProcessCartBtn.classList.add("hidden");
        homeBtn.classList.remove("hidden");
        booksCart.innerHTML = "<h1>El carrito está vacío.</h1>"
    }
    for (let index = 0; index < cart.length; index++) {
        const cartBook = cart[index];
        const card = document.createElement("div");
        card.classList.add("cart-card");
        const imageURL = `https://covers.openlibrary.org/b/olid/${cartBook.cover_edition_key}.jpg`;
        card.innerHTML = `
            <div class="cart-image">
                <img class="cart-img" src="${imageURL}" alt="${cartBook.title}">
            </div>
            <div class="cart-content">
                <h2 class="cart-title">${cartBook.title}</h2>
                <label for="quantity">Cantidad: </label>
                <input type="number" name="quantity" id="Q${index}" value="${cartBook.purchaseQuantity}" required size="5" min="0" max="10"/>
            </div>
        `;
        booksCart.appendChild(card);
        const quantityInput = document.getElementById(`Q${index}`)
        quantityInput.addEventListener("focusout", () => {
            if (Number(quantityInput.value) == 0) {
                deleteFromCart(index)
            } else {
                cartBook.purchaseQuantity = Number(quantityInput.value)
                localStorage.cart = JSON.stringify(cart);
            }
        })
        quantityInput.addEventListener("keypress", () => {
            if (Number(quantityInput.value) == 0) {
                deleteFromCart(index)
            } else {
                cartBook.purchaseQuantity = Number(quantityInput.value)
                localStorage.cart = JSON.stringify(cart);
            }
        })
    }
    // Hide containers 1 & 2 and unhide container 3
    container1.classList.add("hidden");
    container2.classList.add("hidden");
    container3.classList.remove("hidden");
}

function processPurchase() {
    const books = getCartBooks()
    let numberOfBooks = 0
    books.forEach((book) => {
        numberOfBooks += Number(book.purchaseQuantity)
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
    localStorage.setItem("cart", "")
    main()
}

