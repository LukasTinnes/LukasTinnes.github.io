function find_sequence(input){
    let current = input;
    let parts = [current.toString().concat(" -> ")];
    while (current !== 1){
        if (current % 2 === 0){
            current /= 2;
            parts.push(current.toString().concat(" -> "));
        } else {
            current = 3*current+1;
            parts.push(current.toString().concat(" -> "));
        }
    }
    let last = parts.pop();
    last = last.replace(" -> ", "");
    parts.push(last);
    let sequence = parts.join("");
    let elem = document.getElementById("sequence");
    elem.innerText = "Sequence: ".concat(sequence)
}

function solve(){
    let input = parseInt(document.getElementById("input_number").value);
    find_sequence(input);
}