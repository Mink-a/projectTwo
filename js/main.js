console.log('Hello from console!')

function computerPlay(){
    choices = ['rock', 'paper', 'scissors']

return String(choices[Math.floor(Math.random() * 3)])
}

// console.log(computerPlay())

function playRound(playerSection, computerSection){
    if (playerSection === computerSection){
        return `Draw! ${playerSection} and ${computerSection} are the same`
    }else{
        return `Win! ${playerSection} beats ${computerSection}`
    }
}

console.log(playRound('rock', computerPlay()))