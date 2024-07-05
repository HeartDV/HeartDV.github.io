// Function to update orders and calculate total cost
function addOrder() {
    var carts = document.getElementById('carts');
    var total = document.getElementById('total');
    var cash = document.getElementById('cash');
    var change = document.getElementById('change');
    
    carts.textContent = ""; // Clear previous orders
    var totalCost = 0;

    // Helper function to add an item to the cart
    function addItem(qtyElem, priceElem, productElem) {
        var qty = parseFloat(qtyElem.value);
        var price = parseFloat(priceElem.textContent.replace("P", "").replace(",", "").trim());
        var subtotal = qty * price;
        if (qty > 0) {
            var order = qty.toString() + " pc/s x Php " + price.toFixed(2) + " ------ " + productElem.textContent + " ------ Php " + subtotal.toFixed(2) + "\n";
            carts.textContent += order;
            totalCost += subtotal;
        }
    }

    // Update each product's order
    addItem(qty1, price1, product1);
    addItem(qty2, price2, product2);
    addItem(qty3, price3, product3);
    addItem(qty4, price4, product4);
    addItem(qty5, price5, product5);
    addItem(qty6, price6, product6);

    // Update total cost
    total.value = totalCost.toFixed(2);

    // Calculate change if cash tendered is provided
    if (parseFloat(cash.value) >= totalCost) {
        change.value = (parseFloat(cash.value) - totalCost).toFixed(2);
    } else {
        change.value = "";
    }
}

// Add event listeners for keyup events on quantity inputs
qty1.addEventListener('keyup', addOrder);
qty2.addEventListener('keyup', addOrder);
qty3.addEventListener('keyup', addOrder);
qty4.addEventListener('keyup', addOrder);
qty5.addEventListener('keyup', addOrder);
qty6.addEventListener('keyup', addOrder);
cash.addEventListener('keyup', addOrder);

// Function to clear orders and reset total, cash, and change fields
function clearOrders() {
    var carts = document.getElementById('carts');
    var total = document.getElementById('total');
    var cash = document.getElementById('cash');
    var change = document.getElementById('change');

    console.log("Clear Button orders clicked");
    carts.textContent = "";
    total.value = "";
    cash.value = "";
    change.value = "";
}

// Add event listener for the clear orders button
document.getElementById('clearOrdersButton').addEventListener('click', clearOrders);
            
