function perfect_power(number) {
    if (number === 1) {
        return true;
    }
    let logn = Math.log2(number);
    let b = 2;
    while (b < logn) {
        // Set bounds of possible a's
        let lowa = 1;
        let higha = 1 << (logn / b + 1);
        while (lowa < higha - 1) {
            let mida = (lowa + higha) >> 1;
            let exponent = fast_exponent(mida, b);
            if (exponent > number) {
                higha = mida;
            } else if (exponent < number) {
                lowa = mida;
            } else {
                return true;
            }
        }
        b++;
    }
    return false;
}

function fast_exponent(a, b) {
    let result = 1;
    while (b > 0) {
        if (b && 1) {
            result *= a;
            a *= a;
            b >>= 1;
        }
    }
    return result;
}

function coprime(r, n) {
    let bool = gcd(r, n) === 1;
    console.log('Coprime('.concat(r.toString().concat(",".concat(n.toString().concat("=".concat(bool.toString()))))))
    return bool;
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function order(r, n) {

    for (let k = 1; true; k++) {
        const mod = Math.pow(n, k) % r;
        console.log(Math.pow(n, k));
        console.log(mod);
        if (mod === 1) {
            console.log("smallest k");
            console.log(k);
            return k;
        }
    }
}

// Get the minimum r such that ord_r(n) > log(n)^2
function ord_r(n) {
    let sqr = Math.log2(n) * Math.log2(n);
    let r = 2;
    while (r) {
        if (coprime(r, n) && order(r, n) > sqr) {
            return r;
        }
        console.log("Ignoring ".concat(r.toString()))
        r++;
    }
}

function gcd_check(n, r) {
    let a = 2;
    while (a <= r) {
        const temp = gcd(a, n);
        if (1 < temp && temp < n) {
            return true;
        }
        a++;
    }
    return false;
}

function aks_prime(n) {
    if (n === 0) {
        return false;
    } else if (n === 1 || n === 2) {
        return true;
    } else {
        // Step 1
        console.log("Step 1: Checking for perfect powers")
        if (perfect_power(n)) {
            return false;
        }
        // Step 2
        console.log("Step 2: Checking for ord_r")
        let r = ord_r(n);
        // Step 3
        console.log("Step 3: gcd checks")
        if (gcd_check(n, r)) {
            return false;
        }
        // Step 4
        console.log("Step 4: n<=r")
        if (n <= r) {
            return true;
        }
        // Step 5
        console.log("Step 5: Polynomial computations")
        for (let u = 1; u < Math.sqrt(phi(r)) * Math.log2(n); u++) {
            if (!check_poly_mod(u, n, r)) {
                return false;
            }
        }
        return true;
    }
}

function phi(n) {
    let result = 1;
    for (let i = 2; i < n; i++) {
        if (gcd(i, n) === 1) {
            result++;
        }
    }
    return result;
}

//Fast Polynom functions taken from
//https://github.com/sibu-github/aks_primality_test/blob/master/lib/aks_test.js
// Copyright: Sibaprasad Maiti

function poly_remainder(poly, r) {
    poly.reduce((res, p, i) => {
        if (i < r) {
            res.push(p);
            return res;
        } else {
            res[i % r] += p;
            return res;
        }
    })
}
function check_poly_mod(a, n, r) {
    const poly = poly_mod_n(a, n);
    let remainder = poly_remainder(poly, r);
    remainder[n % r] -= 1;
    remainder[0] -= a;
    return remainder.every(t => t % n === 0);
}

function poly_mod_n(a, n) {
    let x = [a, 1]; // initializing x to power 1, i.e (x + a)
    let res = [1]; // initializing res to power 0, i.e (x^0)
    let counter = n;
    while (counter > 0) {
        if (counter & 1) {
            res = convolve(res, x);
            res = mod_n(res, n);
        }
        x = convolve(x, x);
        x = mod_n(x, n);
        // divide counter by 2 in each step
        counter >>= 1;
    }
    return res;
}

// mod n of each term in a vector
function mod_n(vector, n) {
    return vector.map(v => v % n);
}

// Polynomial multiplication method
function convolve(volume, kernel) {
    const volume_length = volume.length;
    const kernel_length = kernel.length;

    // return empty vector if any of the vector is empty
    if (!volume_length || !kernel_length) {
        return [];
    }

    let displacement = 0;
    const conv_vec = [];

    for (let i = 0; i < volume.length; i++) {
        for (let j = 0; j < kernel.length; j++) {
            if (displacement + j !== conv_vec.length) {
                conv_vec[displacement + j] =
                    conv_vec[displacement + j] + volume[i] * kernel[j];
            } else {
                conv_vec.push(volume[i] * kernel[j]);
            }
        }
        displacement++;
    }

    return conv_vec;
}

function test_prime() {
    let solution = parseInt(document.getElementById("prime_input").value);
    if (solution > 200) {
        let h = document.getElementById("prime_solution");
        h.innerText = "Solution: Would probably take a lot of time. I will spare your browser from its death";
    } else {
        let bool = aks_prime(solution);
        let h = document.getElementById("prime_solution");
        h.innerText = "Solution: ".concat(bool.toString());
    }
}
