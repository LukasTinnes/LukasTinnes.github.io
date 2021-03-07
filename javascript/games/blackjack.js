class Card {
    constructor(type, value) {
        this.type = type;
        this.card_value = value;
    }
}

class Play_hand {
    constructor() {
        this.cards = [];
        this.value = 0;
    }

    add_card(card) {
        console.log("Got: ".concat(card.card_value))
        this.cards.push(card);
        this.value += card.card_value;
        console.log("Current hand_value ".concat(this.value))
    }


    give_back(stack) {
        stack.concat(this);
        this.cards = [];
        this.aces = 0;
    }

}

function to_value(val) {
    switch (val) {
        case "2":
            return 2;
        case "3":
            return 3;
        case "4":
            return 4;
        case "5":
            return 5;
        case "6":
            return 6;
        case "7":
            return 7;
        case "8":
            return 8;
        case "9":
            return 9;
        case "10":
            return 10;
        case "King":
            return 10;
        case "Queen":
            return 10;
        case "Ace":
            return 1;
        case "Jack":
            return 10;
    }
}

var cardset;
var player_hand = new Play_hand();
var croupier_hand = new Play_hand();
var wins = 0;
var losses = 0;

function start_game() {
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "King", "Queen", "Jack", "Ace"];
    const cards = ["Heart", "Club", "Diamonds", "Spade"];

    cardset = [];
    for (let type of cards) {
        for (let val of values) {
            cardset.push(new Card(type, to_value(val)))
        }
    }
    shuffleArray(cardset);

}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function croupier(enemy) {
    while (croupier_hand.value < 17) {
        croupier_hand.add_card(cardset.pop());
    }
    if (croupier_hand.value > 21 || croupier_hand.value < player_hand.value) {
        croupier_hand.give_back(cardset);
        player_hand.give_back(cardset);
        croupier_hand.value = 0;
        player_hand.value = 0;
        shuffleArray(cardset);
        return true;
    } else {
        croupier_hand.give_back(cardset);
        player_hand.give_back(cardset);
        croupier_hand.value = 0;
        player_hand.value = 0;
        shuffleArray(cardset);
        return false;
    }
}

function next_card() {
    player_hand.add_card(cardset.pop());
    if (player_hand.value > 21) {
        croupier_hand.give_back(cardset);
        player_hand.give_back(cardset);
        croupier_hand.value = 0;
        player_hand.value = 0;
        shuffleArray(cardset);
        update_score(false);
    }
    if (player_hand.value === 21){
        croupier_hand.give_back(cardset);
        player_hand.give_back(cardset);
        croupier_hand.value = 0;
        player_hand.value = 0;
        shuffleArray(cardset);
        update_score(true);
    }
}

function pass() {
    let win = croupier();
    update_score(win);

}

function update_score(win) {
    if (win) {
        wins += 1;
        console.log("New win: ".concat(wins));

        //    Update player win score
    } else {
        //    Update losing score
        losses += 1;
        console.log("New loss: ".concat(losses));

    }
}

start_game();

