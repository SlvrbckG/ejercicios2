let theBox = document.getElementById("box")

theBox.addEventListener("click", function() {
    console.log("I want to open the box!")
})
// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)


const buyBtn = document.getElementById("container")

buyBtn.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy() {
    buyBtn.innerHTML+=<p>"Thanks for buying!"</p>
}

const recipient = "James"
const sender = "Slvrbck"

// Refactor the email string to use template strings
const email = `
    Hey ${recipient}! 
    How is it going? 
    Cheers ${sender}
    `

console.log(email)

console.log(  Boolean("")   ) //false
console.log(  Boolean("0")  ) //true
console.log(  Boolean(100)  ) //true
console.log(  Boolean(null) ) //false
console.log(  Boolean([0])  ) //true
console.log(  Boolean(-0)   ) //false

const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name}, ${emoji}`
}

greetUser("howdy", "blu", "🔥")

// Create a function, add(), that adds two numbers together and returns the sum

function add(a, b) { //a and b are parameters
    return a + b
}

console.log( add(3, 4)   ) // should log 7 // 3 and 4 are arguments
console.log( add(9, 102) ) // should log 111

// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr) {
   return arr[0]
}
let firstCard = getFirst([10,11,2])

console.log(firstCard)
// Call it with an array as an argument to verify that it works

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
logItems(myCourses)


let logScore = document.getElementById("log-score")

logScore.addEventListener("click", function(){
    console.log(data[0].score)
})
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)


// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseString = `The ${arr.lenght}${desc} are `
    const lastIndex = arr.length - 1
    for (let i=0; i<arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
    }
}
    return baseString
}


const sentence = generateSentence("highest mountains", ["Mt. Everest", "K2"])
console.log(sentence)

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages(){
    let imgsDOM = ""
    for (let i=0; i<arr.length; i++) {
       imgsDOM += `<img class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}
renderImages()


// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ totalPrice.toFixed(2) }`

