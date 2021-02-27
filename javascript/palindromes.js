function palindrome(n) {
    if (n === 0) {
        alert(" What exactly is a number with 0 digits?")
    }
    if (n === 1) {
        return [9, 1, 9];
    }
    //Set bounds
    let pow = Math.pow(10, n);
    let max = 2 * (9 * Math.pow(10, n) - 1);
    // Search integer solution
    for (let z = 2; z < max; z++) {
        let left = pow - z;
        let right = reversedNum(left);

        if (Math.pow(z, 2) - 4 * right < 0) {

        } else {
            let x_1 = 0.5 * (z + Math.sqrt((Math.pow(z, 2) - 4 * right)));
            let x_2 = 0.5 * (z - Math.sqrt((Math.pow(z, 2) - 4 * right)));
            if (Number.isInteger(x_1) || Number.isInteger((x_2))) {
                // Get x, y and solution
                let sol = (pow * left + right);
                let x;
                let y;
                if (Number.isInteger(x_1)) {
                    x = x_1;
                    y = z - x;
                } else {
                    x = x_2;
                    y = z - x;
                }

                return [sol, pow - x, pow - y];
            }
        }
    }
}


function reversedNum(num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}

function solve_palindrome() {
    let inp = parseInt(document.getElementById("palindrome_input").value);
    if (inp < 0) {
        alert("There are numbers with a negative amount of digits? Huh... Well I wouldn't know how to solve that.")
    }
    if (inp >= 8) {
        let h = document.getElementById("prime_solution");
        h.innerText = "Solution: Bigger n can not be computed this way. You can proof that for yourself.";
    } else {
        let solution = palindrome(inp);
        let h = document.getElementById("palindrome_solution");
        let h_1 = document.getElementById("palindrome_x");
        let h_2 = document.getElementById("palindrome_y");
        h.innerText = "Solution: ".concat(solution[0].toString())
        h_1.innerText = "X: ".concat(solution[1].toString())
        h_2.innerText = "Y: ".concat(solution[2].toString())
    }
}