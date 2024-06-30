document.addEventListener('DOMContentLoaded', function () {
    // Product prices
    const prices = {
        product1: 27000,
        product2: 37000,
        product3: 45000,
        product4: 55000,
        product5: 65000,
        product6: 75000
    };

    const products = {
        product1: 'Samsung S21',
        product2: 'Samsung S22',
        product3: 'iPhone 12',
        product4: 'iPhone 13',
        product5: 'OnePlus 9',
        product6: 'Google Pixel 6'
    };

    // Calculate total cost
    function calculateTotal() {
        let total = 0;
        let orders = '';
        for (let i = 1; i <= 6; i++) {
            const quantity = document.getElementById(`qty${i}`).value;
            if (quantity > 0) {
                orders += `${quantity} x ${products[`product${i}`]} @ ${prices[`product${i}`]} each\n`;
                total += quantity * prices[`product${i}`];
            }
        }
        document.getElementById('carts').value = orders.trim();
        document.getElementById('total').value = total.toFixed(2);
        return total;
    }

    // Calculate change
    function calculateChange() {
        const total = calculateTotal();
        const cash = document.getElementById('cash').value;
        const change = cash - total;
        document.getElementById('change').value = change.toFixed(2);
    }

    // Add event listeners
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`qty${i}`).addEventListener('input', calculateTotal);
    }
    document.getElementById('cash').addEventListener('input', calculateChange);
});



     
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
