let x = 'Player';
let o = 'CPU';
let playfield = ['&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;'];
const checker = {
    rows: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
    columns: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
    diagonals: [[0, 4, 8], [2, 4, 6]]
};
let remainders = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function start_cpu() {
    let x = 'CPU';
    let o = 'Player';
    clear_game();
    cpu_turn();
}

function clear_game() {
    playfield = ['&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;'];
    remainders = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}

function would_lose() {
    //Checks if the CPU would lose
    return false;
}

function save_index() {
    //Checks for a tile which needs to be saved to not lose
    return undefined;
}

function play(saveIndex) {
//    Plays a specific index and updates everything
}

function can_win() {
    //Checks for winning moves
    return false;
}

function winning_move() {
    // Plays a winning move and ends the game
    return undefined;
}

function cpu_turn(){
    if (would_lose()){
        play(save_index())
    } else if (can_win()) {
        play(winning_move())
    }
}

function update_board(){
    //Updates the board according to the playfield values
    for (let i=0;i<9;i++){
        let elem = document.getElementById(i.toString());
        elem.innerHTML=playfield[i];
    }
}

update_board();