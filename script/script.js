var p_score = 0;
var c_score= 0;
var choice=["Rock", "Paper", "Scissor"];
var playerSelection=0
var score = 0
var Current_Score=0







const Rockbtn = document.getElementById("Rockbtn")
const Paperbtn = document.getElementById("Paperbtn")
const Scissorbtn = document.getElementById("Scissorbtn")
Rockbtn.addEventListener("click",()=>Selected("Rock"))
Paperbtn.addEventListener("click",()=>Selected("Paper"))
Scissorbtn.addEventListener("click",()=>Selected("Scissor"))
const Changebtn = document.getElementById("again")
Changebtn.addEventListener("click",()=>restart())




function Selected(playerSelection){
    console.log(playerSelection+" "+"player")
    
    var computerSelection = getComputerChoice()
    var test = PlayRound(playerSelection,computerSelection)
    var game=gameover(p_score,c_score)
    var score=scoreboard()

    document.getElementById("result2").textContent=(playerSelection+" "+"Seçtiniz"+" "+"Bilgisayar Seçimi ise "+" "+computerSelection)
    return test;
    
    }
    
    



function PlayRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
            console.log("draw") 
            console.log("Current Score"+" "+"Player Score"+" "+p_score+" "+"Computer Score"+" "+c_score)
            document.getElementById("result").innerText=("BERABERE")    
    } if (
        (playerSelection === "Rock" && computerSelection === "Scissor")||
        (playerSelection === "Paper"&& computerSelection === "Rock"  ) ||
        (playerSelection === "Scissor"&&computerSelection === "Paper")) {
        console.log("player win")
        p_score++
        console.log("Current Score"+" "+"Player Score"+" "+p_score+" "+"Computer Score"+" "+c_score)
        document.getElementById("result").innerText=("Bu Tur Şanslıydın")
        if(p_score>=5){
            console.log("@@@ PLAYER WON @@@@ ")
            document.getElementById("Final_Result").textContent=("Ucu Ucuna Galipsin!")
            
        }
    }
    
       if (
        (playerSelection ==="Rock"&&computerSelection ==="Paper")||
        (playerSelection ==="Paper"&&computerSelection ==="Scissor")||
        (playerSelection ==="Scissor"&&computerSelection ==="Rock")){
        console.log("computer win")
        c_score++
        document.getElementById("result").innerText=("Bu Tur Yenildin") 
        console.log("Current Score"+" "+"Player Score"+" "+p_score+" "+"Computer Score"+" "+c_score)
        if(c_score>=5){
            console.log("$$$COMPUTER WON $$$")
            document.getElementById("Final_Result").textContent=("Bilgisayar Tarafından Ezildin")
        } 
    
    }
    
    }
    function getComputerChoice(){
        var rand = choice[Math.floor(Math.random()*choice.length)] 
        console.log(rand+" "+"computer")
        
        return rand
        
    }
    
    function gameover(p_score,c_score){

        if ( p_score >= 5 || c_score>= 5 ){
            document.getElementById("Rockbtn").disabled=true
            document.getElementById("Paperbtn").disabled=true
            document.getElementById("Scissorbtn").disabled=true
            document.getElementById("info").textContent=("Yeniden oynamak İçin Play again Tuşuna basmalısın.")
        }
    }
    function restart(reset){
       p_score= 0;
       c_score=0;
        document.getElementById("Rockbtn").disabled=false
            document.getElementById("Paperbtn").disabled=false
            document.getElementById("Scissorbtn").disabled=false
            document.getElementById("presult").innerText=("Player Score:"+ "0")
            document.getElementById("Computerscore").innerText=("Computer Score:"+ "0 ")
            document.getElementById("result").textContent=("")
            document.getElementById("result2").textContent=("")
            document.getElementById("Final_Result").textContent=("")
            document.getElementById("info").textContent=("")
            return reset
    }

    function scoreboard(){
        document.getElementById("presult").innerText=("Player Score:"+ " "+p_score)
        document.getElementById("Computerscore").innerText=("Computer Score:"+ " "+c_score)
        
        

        
    }

    