let userScore = 0;
let  computerScore = 0;
const userScore_span = document.getElementById("puntuacion-usuario");
const computerScore_span = document.getElementById("puntuacion-pc");
const scoreBoard_div = document.querySelector(".tabla-puntuacion");
const result_div = document.querySelector(".resultado > p");
const pi_div = document.getElementById("pi");
const pa_div = document.getElementById("pa");
const ti_div = document.getElementById("ti");

// Eleccion de la maquina
function getComputerChoise(){
    const choices = ["pi", "pa", "ti"]
    /* console.log(Math.floor(Math.random()*3)); */
    const randomNumber = (Math.floor(Math.random()*3))
    return choices [randomNumber];
}

//Conversion de las variables a palabras
function convertToWord (letter) {
    if (letter === "pi") return "Piedra"
    if (letter === "pa") return "Papel"
    if (letter === "ti") return "Tijeras"
 }

//Si ganas sumas punto
function win (userChoise, ComputerChoise) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //Aplicacion convertToWord
/*     const smallUserWord = "Jugador".fontsize.sub()
    const smallEnemiWord = "Enemigo".fontsize.sub() */
    result_div.innerHTML = convertToWord(userChoise) + ", le gana a " + convertToWord(ComputerChoise) + ". Vos ganas 🎉";
}

function lose (userChoise, ComputerChoise){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //Aplicacion convertToWord
/*     const smallUserWord = "Jugador".fontsize.sub()
    const smallEnemiWord = "Enemigo".fontsize.sub() */
    result_div.innerHTML = convertToWord(userChoise) + ", pierde contra " + convertToWord(ComputerChoise) + ". Perdiste 😞";

}

function draw (userChoise, ComputerChoise){
    //Aplicacion convertToWord
/*     const smallUserWord = "Jugador".fontsize.sub()
    const smallEnemiWord = "Enemigo".fontsize.sub() */
    result_div.innerHTML = convertToWord(userChoise) + " = " + convertToWord(ComputerChoise) + ". Es un empate 🤝🏽";




}

//Eleccion del jugador
function game(userChoise){
    const ComputerChoise = getComputerChoise();
    switch(userChoise + ComputerChoise){
            case "papi":
            case "tipa":
            case "piti":
            win(userChoise, ComputerChoise)
        break;
        case "pipa":
        case "pati":
        case "tipi":
            lose(userChoise, ComputerChoise)
        break;
        case "pipi":
        case "papa":
        case "titi":
            draw(userChoise, ComputerChoise)
        break; 
    }
}

//Poder hacer click
function main () {
    pi_div.addEventListener("click", function() {
        game("pi");
    })    
    pa_div.addEventListener("click", function() {
        game("pa");
    })  
    ti_div.addEventListener("click", function() {
        game("ti");
    })
}
main();





