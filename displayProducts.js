// Fetch products from the products.js file

// Function to display products on the page

const products = [
    {
        id: 0,
        name: "T-shirt 1",
        price: 29.99,
        instock: 100,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/tw1.jfif",
    },
    {
        id: 1,
        name: "T-shirt 2",
        price: 24.99,
        instock: 43,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/tbl1.jfif",
    },
    {
        id: 2,
        name: "T-shirt 3",
        price: 19.99,
        instock: 10,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/tg1.jfif",
    },
    {
        id: 3,
        name: "T-shirt 4",
        price: 25.99,
        instock: 5,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "../images/tb1.jfif",
    },
    {
        id: 4,
        name: "T-shirt 5",
        price: 29.99,
        instock: 4,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/tbr1.jfif",
    },
    {
        id: 5,
        name: "T-shirt 6",
        price: 39.99,
        instock: 40,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/hg1.jfif",
    },
    {
        id: 6,
        name: "T-shirt 6",
        price: 39.99,
        instock: 40,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/hy1.jfif",
    },
    {
        id: 7,
        name: "T-shirt 6",
        price: 39.99,
        instock: 40,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/lj1.jfif",
    },
    {
        id: 8,
        name: "T-shirt 6",
        price: 39.99,
        instock: 40,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/jb1.jfif",
    },
    {
        id: 9,
        name: "T-shirt 6",
        price: 39.99,
        instock: 40,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/jbl1.jfif",
    },
    {
        id: 10,
        name: "T-shirt 6",
        price: 39.99,
        instock: 40,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/jbr1.jfif",
    },
    {
        id: 11,
        name: "T-shirt 6",
        price: 39.99,
        instock: 40,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
        imgSrc: "./images/jg1.jfif",
    },
];

const productContainer = document.getElementById('product-container');

function displayProducts() {

    // Loop through each product and create a product card
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-12 col-md-6 col-lg-3 product-card';

        // Display product information
        productCard.innerHTML = `
          <div class="d-flex justify-content-center align-items-center m-5">
            <div class="card">
              <img src="${product.imgSrc}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <div class="d-flex justify-content-between mb-3">
                  <p class="small grey"><i class="fa-solid fa-book-open-reader"></i>: Rs ${product.price.toFixed(2)}</p>
                  <!-- Adjust the date format if needed -->
                </div>
                <h5 class="card-title mb-2">${product.name}</h5>
                <p class="card-text mb-3">${product.description}</p>
                <button class="btn btn-dark px-3 add-to-cart" data-product-id=${product.id}>Add To Cart</button>
              </div>
            </div>
          </div>
        `;

        // Append the product card to the container
        productContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    // Retrieve the current cart from local storage or create an empty cart if it doesn't exist
    const cart = getCart();

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item == productId);

    if (!existingProduct) {
        cart.push(productId);
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display the updated cart count (optional)
    updateCartCount();

    // You can also update the UI or show a confirmation message
    console.log(`Product ${productId} added to cart`);
}

// Function to retrieve the current cart from local storage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to display the cart count (optional)
function updateCartCount() {
    const cartCountElement = document.getElementById('Cart_size');
    const cart = getCart();
    const totalCount = cart.length;
    cartCountElement.textContent = totalCount;
}

// Attach a click event listener to the document, and check if the clicked element is a button with the "add-to-cart" class
productContainer.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('add-to-cart')) {
        // Get the product ID from the data-product-id attribute
        const productId = clickedElement.getAttribute('data-product-id');

        // Call the addToCart function with the product ID
        addToCart(productId);
    }
});


updateCartCount();
displayProducts();