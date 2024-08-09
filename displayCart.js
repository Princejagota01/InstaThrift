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

  // ... your existing fetch and displayProducts functions ...
  const cartContainer = document.getElementById('cart-container');
  const totalPrice = 0;
  // Function to display product cards for items in the cart
  function displayCartProducts() {
    
    const cart = getCart();
    
    const cartSizeElement = document.getElementById("Cart_size");

    // Display the cart size (you might want to fetch this from the server or local storage)
    // For simplicity, I'll set it to 0 initially.
    let currentCartSize = cart.length;
    cartSizeElement.innerText = currentCartSize;


    // Clear the existing content of the cart container
    cartContainer.innerHTML = '';

    // Loop through each item in the cart and create a product card
    
    cart.forEach(cartItem => {
        
      const product = getProductById(cartItem);

      if (product) {
        const productCard = document.createElement('div');
        productCard.className = 'col-12 col-md-6 col-lg-3 product-card';
        // calculatePrice(product.price.toFixed(2));
        // Display product information
        productCard.innerHTML = `
          <div class="d-flex justify-content-center align-items-center">
            <div class="card">
              <img src="${product.imgSrc}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <div class="d-flex justify-content-between mb-3">
                  <p class="small grey"><i class="fa-solid fa-book-open-reader"></i>: Rs ${product.price.toFixed(2)}</p>
                  <!-- Adjust the date format if needed -->
                  <p class="small grey">${product.date}</p>
                </div>
                <h5 class="card-title mb-2">${product.name}</h5>
                <p class="card-text mb-3">${product.description}</p>
                <button class="delete-button" data-product-id="${product.id}" >Delete</button>
              </div>
            </div>
          </div>
        `;
        cartContainer.appendChild(productCard);
      }
    });
  }

  function calculatePrice(price){
    totalPrice += price;
  }

  cartContainer.addEventListener('click', (event) => {
    const button = event.target;

    if(button.classList.contains('delete-button')){
        const cart = getCart();
        const id = button.getAttribute('data-product-id');
        const newCart = cart.filter(cartItem => cartItem != id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        displayCartProducts();
    }
  })

  // Function to get a product by ID
  function getProductById(productId) {
    // Replace this with your logic to fetch the product data
    // For now, use a simple array as a placeholder
    return products.find(product =>  product.id == productId);
  }
  function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  document.addEventListener('DOMContentLoaded', () => {
    // ... your existing code ...

    // Optionally, display product cards for items in the cart on page load
    displayCartProducts();
  });


// <!-- ... your existing HTML code ... -->

// <!-- Create a container in your HTML to display the cart products -->
// <div class="row" id="cart-container"></div>