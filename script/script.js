console.log("hello world")
const choice=["Rock", "Paper", "Scissor"];

var playerSelection=prompt("taş için 1 kağıt için 2 makas için 3 yazın.")

if (playerSelection==1){

      var playerSelection = ("Rock")
     console.log(playerSelection)

} else if (playerSelection==2){

   var   playerSelection = ("Paper")
     console.log(playerSelection)

} else if (playerSelection==3){

   var  playerSelection = ("Scissor")
    console.log(playerSelection)

} else {
    alert("geçerli bir değer seçmediniz.")
}



function getComputerChoice(){
    var rand = choice[Math.floor(Math.random()*choice.length)]
// console.log(rand); 
    return rand
}
// var rand = choice[Math.floor(Math.random()*choice.length)]

var computerSelection=getComputerChoice();
console.log(computerSelection+" "+"computer selection")
var sonuc= playRound(playerSelection,computerSelection)
function playRound(playerSelection,computerSelection) {
    if (playerSelection=="Rock" && computerSelection=="Scissor"){
       console.log("win rock beats scissor")
    } else if(playerSelection =="Rock" && computerSelection=="Paper"){
       console.log("lose rock cant beat paper")
    } else if (playerSelection=="Rock" && computerSelection=="Rock"){
       console.log("draw rock vs rock")
    }

    if (playerSelection==="Paper" && computerSelection==="Rock"){
        console.log("win Paper beat rock")
    } else if(playerSelection==="Paper" && computerSelection==="Scissor"){
        console.log("lose paper cant beat scissor")
    }else if (playerSelection==="Paper" && computerSelection==="Paper"){
        console.log("draw paper vs paper")
    }
    if(playerSelection==="Scissor" && computerSelection==="Paper"){
        console.log("win scissor beat paper")
    } else if (playerSelection==="Scissor" && computerSelection==="Rock"){
        console.log("lose Scissor cant beat rock")
    }else if (playerSelection==="Scissor" && computerSelection==="Scissor"){
        console.log("draw scissor vs scissor")
    }
    return  sonuc;
}



// function game(){

    for (let i= 0; i < 5; i++) {
   playRound(i);
   console.log(i);
    }

    // return result;
// }
