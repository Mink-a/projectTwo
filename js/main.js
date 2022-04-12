console.log('Hello from console!')

function computerPlay(){
    choices = ['rock', 'paper', 'scissors']

return choices[Math.floor(Math.random() * 3)]
}

console.log(computerPlay())