const prompt = require('prompt-sync') ()
const  name = prompt('What is your name? ')
// console.log(name)
// console.log('Hello', name, 'How are you?')
// console.log('Hello', name, 'Welcome to our game!')

const shouldWePlay = prompt('Do you want to play? ')
//   ==>  Game logic
const leftOrRight = prompt('You enter a maze, do you want to go left or right? ')
if(leftOrRight.toLowerCase() === 'left') {
    console.log('You go left and see a bridge..')
    const cross = prompt('Do you want to cross the bridge? ').toLowerCase()
    if (cross == 'yes') {
        console.log('You cross but the bridge was weak and broke and you fell. you lost')
    } else {
        console.log('Good choice...You Win')
    }
} else {
    console.log('You go right and fall off a cliff')
}







/*
const condition = shouldWePlay.toLowerCase() === 'yes'
console.log(condition)

//  ==> or If Statement

if (shouldWePlay.toLowerCase() === 'yes') {
    console.log('Okay we will play')
} */

//  ==> if and else statement
/*
if (shouldWePlay.toLowerCase() === 'yes') {
    console.log('Okay we will play')
} else {
    console.log('Have a nice day')
} 



//  ==> if and else if and else statement
if (shouldWePlay.toLowerCase() === 'yes') {
    console.log('Okay we will play')
} else if (shouldWePlay.toLowerCase() === 'no') {
    console.log('Have a nice Day!')
} else {
    console.log('Invalid input')
}

*/


//
