// Add to Cart
const btnCart = document.querySelector('.btn-cart');
const Cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

btnCart.addEventListener('click', () => {
    Cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
    Cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
    loadContent();
}

function loadContent() {
    let btnRemove = document.querySelectorAll('.cart-remove');
    console.log(btnRemove);
    btnRemove.forEach((btn) => {
        btn.addEventListener('click', removeItem);
    });
    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input) => {
        input.addEventListener('change', changeQty);
    });
    let cartBtns = document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn) => {
        btn.addEventListener('click', addCart);
    });
    updateTotal();
}

function removeItem() {
    if (confirm('Are you sure to remove')) {
        let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList = itemList.filter((el) => el.title != title);
        this.parentElement.remove();
        loadContent();
        updateCartCount();
    }
}

function changeQty() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    // Update cart amount here
    loadContent();
}

let itemList = [];

function addCart() {
    let food = this.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgSrc = this.parentElement.querySelector('.food-img').src;

    let newProduct = { title, price, imgSrc };

    if (itemList.find((el) => el.title == newProduct.title)) {
        alert('Product already added in cart');
        return;
    } else {
        itemList.push(newProduct);
    }
    let newProductElement = createCartProduct(title, price, imgSrc);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;
    let cartBasket = document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();
    updateCartCount();
}

function createCartProduct(title, price, imgSrc) {
    // Corrected template literals
    return `
    <div class="cart-box">
        <img src="${imgSrc}" class="cart-img">
        <div class="detail-box">
            <div class="cart-food-title">${title}</div>
            <div class="price-box">
                <div class="cart-price">${price}</div>
                <div class="cart-amt">${price}</div>
            </div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <div class="cart-remove"><i class='bx bxs-trash'></i></div>
    </div>`;
}
function updateTotal(){
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');

    let total = 0;
    cartItems.forEach(product=>{
        let priceElement = product.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("Rs.",""));
        let qty = product.querySelector('.cart-quantity').value;
        total +=(price * qty);
        product.querySelector('.cart-amt').innerText = "Rs." + (price * qty);
    });
    totalValue.innerHTML = "Rs." + total;
}

function updateCartCount(){
        let count = itemList.length;
        const cartCount = document.querySelector('.cart-count');
        cartCount.innerHTML = count;

        if (count === 0) {
            cartCount.style.display = 'none';
        } else {
            cartCount.style.display = 'block';
        }
}
function generateInvoice() {
    const cartItems = document.querySelectorAll('.cart-box');
    if (cartItems.length === 0) {
        alert('Your cart is empty. Add items to your cart before placing an order.');
        return;
    }

    let totalCost = 0;
    let invoiceItems = '';

    cartItems.forEach((product) => {
        let title = product.querySelector('.cart-food-title').textContent;
        let priceElement = product.querySelector('.cart-price');
        let price = parseFloat(priceElement.textContent.replace('Rs.', ''));
        let qty = parseInt(product.querySelector('.cart-quantity').value);
        let itemCost = price * qty;
        totalCost += itemCost;

        invoiceItems += `
            <tr>
                <td>${title}</td>
                <td>Rs.${price.toFixed(2)}</td>
                <td>${qty}</td>
                <td>Rs.${itemCost.toFixed(2)}</td>
            </tr>
        `;
    });

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    const invoiceHTML = `
        <html>
        <head>
            <title>Invoice</title>
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }

                th {
                    background-color: #f2f2f2;
                }

                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <div class="container mt-5">
                <h1 class="text-center">Invoice</h1>
                <p><strong>Date and Time:</strong> ${formattedDate}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${invoiceItems}
                    </tbody>
                </table>
                <p class="text-right">Total Cost: Rs.${totalCost.toFixed(2)}</p>
            </div>
        </body>
        </html>
    `;

    const popup = window.open('', '_blank');
    popup.document.open();
    popup.document.write(invoiceHTML);
    popup.document.close();
}

// Add a click event listener to the "Place Order" button
const btnPlaceOrder = document.querySelector('.btn-buy');
btnPlaceOrder.addEventListener('click', generateInvoice);
