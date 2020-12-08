/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇
// DETAILED INSTRUCTIONS
// 1. pick out the neccesary elements from the HTML
// 2. Create other 5 dice faces in CSS
// 3. use eventlisteners on the appropriate div
// 4. Display dice faces randomly on click

// STRETCH GOALS:
// - Can you show the number you rolled as a integer along-side the dice face?
// - Can you improve the overall design?
// */
const dice = document.querySelector('.dice');
const integer = document.querySelector('.numberDice');
const dots = document.querySelectorAll('.dot')

dice.addEventListener('click', () => rollDice(randomDiceRoll()));

const diceMatrix = {
    1: [0, 0, 0, 0, 1, 0, 0, 0, 0],
    2: [1, 0, 0, 0, 0, 0, 0, 0, 1],
    3: [1, 0, 0, 0, 1, 0, 0, 0, 1],
    4: [1, 0, 1, 0, 0, 0, 1, 0, 1],
    5: [1, 0, 1, 0, 1, 0, 1, 0, 1],
    6: [1, 0, 1, 1, 0, 1, 1, 0, 1]
}
// random Dice Number
const randomDiceRoll= () => Math.ceil( Math.random() * 6);

// dice function
const rollDice = (randomDiceRoll) => {
    // You can iterate the values in a NodeList the same way you would an array:
    
    dots.forEach((dot,i)=> {
      diceMatrix[randomDiceRoll][i]? dot.classList.remove('hide') : dot.classList.add('hide')
      integer.innerText = randomDiceRoll;
      //console.log(diceMatrix[randomDiceRoll][i])  
    })
}
