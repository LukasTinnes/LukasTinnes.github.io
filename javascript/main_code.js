function daily_riddle() {
    let riddle = get_riddle()
    let elem = document.getElementById("riddle")
    let text = document.getElementById("riddle_text")
    let solution = document.getElementById("solution")
    if (elem.style.visibility === "hidden"){
        text.innerText = riddle[0];
        solution.innerText = riddle[1]
       elem.style.visibility = "visible";
    } else {
        elem.style.visibility = "hidden";
        let sol_div = document.getElementById("solution_div")
        sol_div.style.visibility = "hidden";
    }
}

function reveal_solution(){
    let elem = document.getElementById("solution_div");
    if (elem.style.visibility === "hidden"){
        console.log("reveal")
        elem.style.visibility = "visible";
    } else {
        elem.style.visibility = "hidden"
    }

}
let url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5';

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    show(data);
}


function show(facts){
    console.log(facts);
    let breaker = " | ";
    let f1 = facts[0].text;
    let f2 = facts[1].text;
    let f3 = facts[2].text;
    let f4 = facts[3].text;
    let f5 = facts[4].text;
    //This is dumb, I will fix it later, maybe, possibly
    let final = f1.concat(breaker.concat(f2.concat(breaker.concat(f3.concat(breaker.concat(f4.concat(breaker.concat(f5))))))))
    let elem = document.getElementById("marquee_text");
    elem.innerText = final;
}
// Calling that async function
getapi(url).then(r => r);

function get_riddle() {
    let date = new Date();
    let day = date.getDay();
    switch (day) {
        case 0:
            let riddles0 = ["What has to be broken before you can use it?"];
            let solutions0 = ["Egg"];
            //This is bad coding style, since it could be a function
            let random_index0 = Math.floor(Math.random()*riddles0.length);
            let riddle0 = riddles0[random_index0];
            let sol0 = solutions0[random_index0];
            return [riddle0, sol0];
        case 1:
            let riddles1 = ["I’m tall when I’m young, and I’m short when I’m old. What am I?"];
            let solutions1 = ["Candle"];
            //This is bad coding style, since it could be a function
            let random_index1 = Math.floor(Math.random()*riddles1.length);
            let riddle1 = riddles1[random_index1];
            let sol1 = solutions1[random_index1];
            return [riddle1, sol1];
        case 2:
            let riddles2 = ["What month of the year has 28 days?"];
            let solutions2 = ["All of them have"];
            //This is bad coding style, since it could be a function
            let random_index2 = Math.floor(Math.random()*riddles2.length);
            let riddle2 = riddles2[random_index2];
            let sol2 = solutions2[random_index2];
            return [riddle2, sol2];
        case 3:
            let riddles3 = ["What is full of holes but still holds water?"];
            let solutions3 = ["A sponge"];
            //This is bad coding style, since it could be a function
            let random_index3 = Math.floor(Math.random()*riddles3.length);
            let riddle3 = riddles3[random_index3];
            let sol3 = solutions3[random_index3];
            return [riddle3, sol3];
        case 4:
            let riddles4 = ["What question can you never answer yes to?"];
            let solutions4 = ["Are you asleep yet?"];
            //This is bad coding style, since it could be a function
            let random_index4 = Math.floor(Math.random()*riddles4.length);
            let riddle4 = riddles4[random_index4];
            let sol4 = solutions4[random_index4];
            return [riddle4, sol4];
        case 5:
            let riddles5 = ["What is always in front of you but can’t be seen?"];
            let solutions5 = ["The future"];
            //This is bad coding style, since it could be a function
            let random_index5 = Math.floor(Math.random()*riddles5.length);
            let riddle5 = riddles5[random_index5];
            let sol5 = solutions5[random_index5];
            return [riddle5, sol5];
        case 6:
            let riddles6 = ["There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?"];
            let solutions6 = ["It is a one-story house. There are no stairs."];
            //This is bad coding style, since it could be a function
            let random_index6 = Math.floor(Math.random()*riddles6.length);
            let riddle6 = riddles6[random_index6];
            let sol6 = solutions6[random_index6];
            return [riddle6, sol6];
    }
}


function get_wind_category(speed){
   if (speed < 1){
       return "Calm"
   } else if (1 <= speed <=3){
       return "Light air"
   } else if (3 < speed <= 7){
       return " Light Breeze"
   } else if (7<speed<=12){
       return "Gentle Breeze, perfect to take a walk"
   } else if (12 < speed <= 18){
       return "Moderate Breeze, good to go out and take a walk."
   } else if (18<speed<=24){
       return "Fresh Breeze, might be a bit fresh"
   } else if (24<speed<=31){
       return "Strong breeze, a bit too windy to go out"
   } else if (31<speed<=38){
       return "Moderate Gale"
   } else if (38 < speed <= 46){
       return "Fresh Gale, getting slightly dangerous"
   } else if (46<speed<=54){
       return "Strong Gale, Buildings can be damaged"
   } else if (54<speed<=63){
       return "Whole Gale, Trees should be uprooted, dangerous"
   } else if (63<speed<=73){
       return "Storm, really really dangerous"
   } else { return "HURRICAAAAANNNNEEE, also, you should not be in this area..."}
}
function weather_report(){
    let zip = document.getElementById("zip_code").value;
    fetch("https://weatherapiforme.herokuapp.com/get?zip=" + zip)
        .then(response => response.json())
        .then(data => draw_weather(data));
}
function draw_weather(data){
    let city = document.getElementById("city_name");
    let temp = document.getElementById("temperature");
    let min = document.getElementById("temp_min");
    let max = document.getElementById("temp_max");
    let feels_like = document.getElementById("feels_like");
    let wind = document.getElementById("wind");
    let hum = document.getElementById("humidity");
    let weather = document.getElementById("currently")
    city.innerText = "Weather for: " + data.name;
    weather.innerText = "Currently: " + data.weather[0].description;
    temp.innerText = "Current Temperature: " + data.main.temp + '°C';
    max.innerText = "Max Temperature: " + data.main.temp_max + '°C';
    min.innerText = "Min Temperature: " + data.main.temp_min + '°C';
    feels_like.innerText = "Feels like: " + data.main.feels_like + '°C';
    wind.innerText = "Wind: " + get_wind_category(data.wind.speed);
    hum.innerText = "Humidity: " + data.main.humidity + "%";
}
