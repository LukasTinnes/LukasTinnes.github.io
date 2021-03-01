function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}




function solve_multiple(){
    var inputs;
    inputs = document.getElementById("multiple_input").value.split(",")
    inputs = inputs.map(t => parseInt(t));
    if (Array.isArray(inputs) && inputs.length > 1){
        let x = multi_lcm(inputs);
        let sol = document.getElementById("multiple_solution");
        sol.innerText = "Solution: ".concat(x);
    } else {
        alert("You have less than 2 inputs")
    }
        }

function multi_lcm(inputs) {
    var current_lcm = lcm(inputs[0], inputs[1])
    for (let i=2;i<inputs.length; i++) {
        current_lcm = lcm(current_lcm, inputs[i])
    }
    return current_lcm;
}

function lcm(a, b) {
    return a*b/gcd(a,b);
}