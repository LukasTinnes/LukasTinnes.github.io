function multiples() {
    let goal = parseInt(document.getElementById("multiples_input").value);
    let index = 0;
    let mul_3 = 0;
    let mul_5 = 0;
    let solution = 0
    while (index < goal) {
        if (mul_3 === 0) {
            solution += index;
        }
        if (mul_5 === 0 && mul_3 !== 0) {
            solution += index
        }
        index += 1;
        console.log("index")
        console.log(index)
        mul_3 += 1;
        console.log("mul_3")
        console.log(mul_3)
        mul_5 += 1;
        console.log("mul5")
        console.log(mul_5)
        if (mul_3 === 3) {
            mul_3 = 0
        }
        if (mul_5 === 5) {
            mul_5 = 0
        }
        let text = document.getElementById("multiples_solution")
        text.innerText = "Solution: ".concat(solution.toString())
    }
}

function even_fibonacci_numbers() {
    let threshhold = parseInt(document.getElementById("fibonacci_input").value);
    if (isNaN(threshhold)) {
        let text = document.getElementById("fib_solution")
        text.innerText = "Solution: Okay. That was not even a number. Red Input Equals not right";
    } else if (threshhold >= 2) {
        let solution = 2;
        let current_fib = 2;
        let previous_fib = 1;
        while (current_fib < threshhold) {
            let middle = current_fib;
            current_fib += previous_fib;
            previous_fib = middle;
            if (current_fib % 2 === 0) {
                solution += current_fib
            }
        }
        let text = document.getElementById("fib_solution")
        text.innerText = "Solution: ".concat(solution.toString())
    } else {
        let text = document.getElementById("fib_solution")
        text.innerText = "Solution: 0, since your value is lower than 2. Maybe try something where the input is not red and mad at you."
    }

}