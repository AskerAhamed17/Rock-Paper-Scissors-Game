let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById('user-score');
const computerscore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('scoreboard');
const result_p = document.querySelector('.result > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissor";
}

function win(a,b){
    userscore++;
    userscore_span.innerHTML=userscore;
    result_p.innerHTML = convertToWord(a)+" beats "+convertToWord(b)+". You win!";
}
function lose(a,b){
    computerscore++;
    computerscore_span.innerHTML=computerscore;
    result_p.innerHTML = convertToWord(b)+" beats "+convertToWord(a)+". You lose!"; 
}
function draw(a,b){
    result_p.innerHTML = " Draw!"
}

function game(userchoice){
    const computerchoice = getComputerChoice();
    switch (userchoice + computerchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,computerchoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userchoice,computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,computerchoice);
            break;
    }
}

function main (){
    rock.addEventListener('click',function (){
        game('r');
    })
    paper.addEventListener('click',function (){
        game('p');
    })
    scissor.addEventListener('click',function (){
        game('s');
    })
}

main()
