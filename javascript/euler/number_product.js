function product(array) {
    let prod = 1;
    for (let i of array) {
        prod *= i;
    }
    return prod;
}


function find_product(digits, n) {
    let max = 0;
    for (let i = 0; i < digits.length; i++) {
        let subarray = digits.slice(i, i + n);
        let prod = product(subarray);
        if (prod > max) {
            max = prod;
        }
    }
    return max;
}

function solve() {
    let number = parseInt(document.getElementById("product_number").value);
    let n = parseInt(document.getElementById("product_n").value);
    let sol = find_product(number.toString().split(""), n)
    let out = document.getElementById("product_sol");
    out.innerHTML = "Solution:".concat(sol);
}