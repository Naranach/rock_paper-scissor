console.log("hello world")
const choice=["Rock", "paper", "scissor"];

console.log(choice)

function getComputerChoice(){
    const rand = choice[Math.floor(Math.random()*choice.length)]

    console.log(rand)
}
