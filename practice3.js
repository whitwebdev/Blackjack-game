let completedCourse = true
let givesCertificate = true

if (completedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate...")
}
// next
let solvedChallenge = false
let hintsRemain = false

if (solvedChallenge === false && hintsRemain === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution...")
}
// next
let likesDocumentaries = false
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Check out this new movie...")
}
//next
let course = {
    title: "Learn CSS for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.length)
console.log(course.tags)
//next
let castle = {
    name: "Tony's house",
    isAwesome: true,
    rooms: 30,
    features: ["bdsm room", "pool"]
}
console.log(castle.isAwesome)
console.log(castle.features[0])
console.log(castle.name)

