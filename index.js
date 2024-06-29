// Variables for products and quantities
var products = [
    { name: "Samsung S21", price: 27000.00, qtyId: "qty1" },
    { name: "Samsung S22", price: 37000.00, qtyId: "qty2" },
    { name: "Samsung S23", price: 45000.00, qtyId: "qty3" }
];

var carts = document.getElementById('carts');
var totalElement = document.getElementById('total');
var cash = document.getElementById('cash');
var change = document.getElementById('change');

// Function to add order to cart and calculate total
function pay() {
    var customerName = document.getElementById('customerName').value.trim();
    var amount = parseFloat(document.getElementById('amount').value);

    if (!customerName || isNaN(amount) || amount <= 0) {
        alert("Please enter valid customer name and amount.");
        return;
    }

    var orderDetails = "";
    products.forEach(function(product) {
        var qtyElement = document.getElementById(product.qtyId);
        var qty = parseFloat(qtyElement.value);

        if (qty > 0) {
            var order = qty.toString() + " pc/s x " + product.price.toFixed(2) + " ------ " + product.name + " ------ Php " + (qty * product.price).toFixed(2) + "\n";
            orderDetails += order;
        }
    });

    if (orderDetails === "") {
        alert("Please enter quantities for at least one product.");
        return;
    }

    var order = "Customer: " + customerName + " - Amount: Php " + amount.toFixed(2) + "\n";
    carts.value += order + orderDetails;
    updateTotal();
    clearInputs();
}

// Function to update total cost
function updateTotal() {
    var totalCost = 0;
    var orders = carts.value.split("\n");
    orders.forEach(function(order) {
        if (order.trim() !== "") {
            var parts = order.split(" ------ ");
            var price = parseFloat(parts[1]);
            totalCost += price;
        }
    });
    totalElement.value = totalCost.toFixed(2);
}

// Function to clear inputs after adding an order
function clearInputs() {
    document.getElementById('customerName').value = "";
    document.getElementById('amount').value = "";
    products.forEach(function(product) {
        var qtyElement = document.getElementById(product.qtyId);
        qtyElement.value = "";
    });
}

// Function to clear all orders
function clearOrders() {
    carts.value = "";
    totalElement.value = "";
    cash.value = "";
    change.value = "";
}

// Event listener for Pay button
document.getElementById('payButton').addEventListener('click', pay);



     
/*
  const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.innerText) + 1
  count1.innerText = likeCounts.toString()
}

btnLike1.addEventListener("click", countLike1)


const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2.innerText) + 1
  count2.innerText = likeCounts.toString()
}

btnLike2.addEventListener("click", countLike2)


const btnLike3 = document.getElementById("btnLike3")
const count3 = document.getElementById("count3")

function countLike3() {
  let likeCounts = parseInt(count3.innerText) + 1
  count3.innerText = likeCounts.toString()
}

btnLike3.addEventListener("click", countLike3)


const btnLike4 = document.getElementById("btnLike4")
const count4 = document.getElementById("count4")

function countLike4() {
  let likeCounts = parseInt(count4.innerText) + 1
  count4.innerText = likeCounts.toString()
}

btnLike4.addEventListener("click", countLike4)


const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
  commentbox.textContent += comment.value.toString() + "\n"
}
submit.addEventListener("click",submitComment) 
/*
