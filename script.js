
function addHeading(type, headingText) {
    const heading = document.createElement(type);
    heading.innerText = headingText;
    heading.classList.add(type == "h1" ? "heading-1" : "heading-2");
    document.body.appendChild(heading);
}

addHeading("h1", "Övning 4");
addHeading("h4", "for ... of loop");

const someNumbers = [324, 23, 5, 63, 0, 24, 32];

for (const number of someNumbers) {
    console.log(number);
}


const names = ["Clara", "Guido", "Emma", "Alrik", "Caroline", "Eric", "Dominique"];

for (const name of names) {
    const nameElem = document.createElement("div");
    document.body.appendChild(nameElem);
    nameElem.innerText = name;
}

addHeading("h4", "while loop");

let num = Math.random();

while (num <= 0.25) {
    num = Math.random();
}
console.log("GT", num);

num = Math.random();
while (num >= 0.3 && num <= 0.4) {
    num = Math.random();
}

console.log("BETWEEN", num);


const moreNumbers = [324, 23, 5, 63, 24, 32, 0];

let rand = Math.floor(Math.random() * moreNumbers.length);

while (moreNumbers[rand] == 0) {
    rand = Math.floor(Math.random() * moreNumbers.length);
}

console.log("Random num", moreNumbers[rand]);

addHeading("h4", "switch");

const currentMonth = "Juni";

switch (currentMonth) {
    case "Januari": console.log("Januari");
    case "Februari": console.log("Februari");
    case "Mars": console.log("Mars");
    case "April": console.log("April");
    case "Maj": console.log("Maj");
    case "Juni": console.log("Juni");
    case "Juli": console.log("Juli");
    case "Augusti": console.log("Augusti");
    case "September": console.log("September");
    case "Oktober": console.log("Oktober");
    case "November": console.log("November");
    case "December": console.log("December");
}