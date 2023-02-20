let age = 22;

if (age < 21) {
    console.log("You cannot enter the club !")
} else {
    console.log("Welcome !")
}

let newAge = 100;

if (newAge < 100) {
    console.log("Not eligible")
} else if (newAge === 100) {
    console.log("Here is your birthday card !")
} else {
    console.log("Not eligible, you already have one")
}

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio",
]
console.log(featuredPosts[0]);
console.log(featuredPosts.length);

let myDetails = ["Tony", 39, true];

let cards = [6, 4];
cards.push(9);
console.log(cards);

let messages = ["Hi", "Great", "Good"];
let newMessage = "Same";
messages.push(newMessage);
console.log(messages);
messages.pop();
console.log(messages);


//   START        FINISH      STEP SIZE
for (let count = 1; count < 11; count += 1) {
    console.log(count)
}

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

let moreCards = [7, 3, 9]; // i = 0 , start at 0 index
for (let i = 0; i < moreCards.length; i++) {
    console.log(moreCards[i])
} // i++ same as i += 1, increment 1
 
