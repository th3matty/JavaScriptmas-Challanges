const typeField = document.getElementById("string");
const counterFooter = document.getElementById("counterFooter");
const tweetBtn = document.getElementById("btn");

let charsKeyCode = [];
let result= [];

// eventListener 
typeField.addEventListener("keydown", e => {
    let keyCodes = Array(e.code);    
    charsKeyCode.push(...keyCodes);
    
    // filter keyCodes "ShiftLeft", "CapsLock" and "Backspace"
    result = charsKeyCode.filter(letter=> !letter.includes("ShiftLeft")&& !letter.includes("CapsLock") && !letter.includes("Backspace")); 
    // return new resultArray if user hits "Backspace"
    charsKeyCode.map(letter => letter === "Backspace" ? result.pop() : letter);   
    // update html for remainingChars
    let totalChars = +document.getElementById("totalChars").textContent;
    let textLength = result.length;
    let remainChars =  totalChars - textLength;
    console.log("remainChars",remainChars)
    
    if( remainChars < totalChars){
        document.getElementById("remainingChars").innerHTML = remainChars;
        if(remainChars <= 20){
            document.getElementById("remainingChars").innerHTML = `<span style="color:red">${remainChars} </span>`
        }
        if( remainChars < 0){
            tweetBtn.classList.add("buttonDisabled");
        }else{
            tweetBtn.classList.remove("buttonDisabled")
        }
    }
   return result;
})


tweetBtn.addEventListener("click", () => {   
   const textValue = typeField.value;
   window.open(`https://twitter.com/intent/tweet?text=${textValue}`,'__blank');
});

/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
