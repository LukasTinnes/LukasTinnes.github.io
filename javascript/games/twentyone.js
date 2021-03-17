let score = 0

function update_score(number) {
    let elem = document.getElementById('score_id');
    if (score < 21) {

    } else if (score === 21) {
    }
    elem.innerText = "Score: ".concat(number);
}

function next_turn(increment) {
    score += increment;
    if (score === 21) {
        end_game(true);
    } else {
        let elem = document.getElementById("cpu")
        if (score === 20) {
            score = 21;
            elem.innerText ="Computer played 1 and got 21";
            end_game(false);
        }
        else if (score === 19) {
            score = 21;
            elem.innerText = "Computer played 2 and got 21";
            end_game(false);
        } else {
            let random = Math.round(Math.random()) + 1;
            score += random;
            elem.innerText = "Computer played ".concat(random.toString());
            update_score(score);
        }
    }

}

function clear_game(){
    score = 0;
    let score_id = document.getElementById('score_id');
    let cpu = document.getElementById('cpu');
    score_id.innerText = "Score: 0";
    cpu.innerText = "Computer is waiting for your turn.";
}

function end_game(bool) {
    let elem = document.getElementById('score_id');
    if (bool) {
        elem.innerText = "You have won!";
    } else {
        elem.innerText = "You have lost!";
    }
}