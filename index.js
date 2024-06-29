var product1 = {
    name: "Samsung S21",
    price: 27000.00
};
var product2 = {
    name: "Samsung S22",
    price: 37000.00
};
var product3 = {
    name: "Samsung S23",
    price: 45000.00
};
var product4 = {
    name: "iPhone 13",
    price: 60000.00
};
var product5 = {
    name: "iPhone 14",
    price: 70000.00
};
var product6 = {
    name: "Google Pixel 6",
    price: 50000.00
};

var products = [product1, product2, product3, product4, product5, product6];

var qtyInputs = [
    document.getElementById('qty1'),
    document.getElementById('qty2'),
    document.getElementById('qty3'),
    document.getElementById('qty4'),
    document.getElementById('qty5'),
    document.getElementById('qty6')
];

var orderList = document.getElementById('orderList');
var totalAmount = document.getElementById('totalAmount');
var cashTendered = document.getElementById('cashTendered');
var changeAmount = document.getElementById('changeAmount');

function addToCart() {
    var totalCost = 0;
    orderList.textContent = ""; // Clear previous orders

    for (var i = 0; i < qtyInputs.length; i++) {
        var qty = parseFloat(qtyInputs[i].value);
        if (qty > 0) {
            var product = products[i];
            var order = qty + " pc/s x " + product.price.toFixed(2) + " ------ " + product.name + " ------ Php " + (qty * product.price).toFixed(2) + "\n";
            orderList.textContent += order;
            totalCost += qty * product.price;
        }
    }

    totalAmount.textContent = "Php " + totalCost.toFixed(2);

    if (parseFloat(cashTendered.value) >= totalCost) {
        var change = parseFloat(cashTendered.value) - totalCost;
        changeAmount.textContent = "Php " + change.toFixed(2);
    } else {
        changeAmount.textContent = "Insufficient amount";
    }
}

function processPayment() {
    // Process payment logic if needed
}


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
