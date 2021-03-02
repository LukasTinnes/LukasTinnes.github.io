function get_triple(){
    let elem_a = document.getElementById("solution_a")
    let elem_b = document.getElementById("solution_b")
    let elem_c = document.getElementById("solution_c")

    let n = parseInt(document.getElementById("pytha_input").value)
    let found = false;
    for (let i=1;i<=n/3;i++){
        const c = (i*i+ (i-n)* (i-n))/(2*(n-i))
        const b = n-c-i;
        if (Number.isInteger(c) && Number.isInteger(b) && i*i+b*b===c*c){
            found = true;
            elem_a.innerText = "a: ".concat(i);
            elem_b.innerText = "b: ".concat(b);
            elem_c.innerText = "c: ".concat(c);
            break;
        }
    }
    if (!found){
        alert("There is no possible integer triple.")
    }
}