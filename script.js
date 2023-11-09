
function addHeading(type, headingText) {
    const heading = document.createElement(type);
    heading.innerText = headingText;
    heading.classList.add(type == "h1" ? "heading-1" : "heading-2");
    document.body.appendChild(heading);
}

function addMonth(monthName, parent) {
    const month = document.createElement("li");
    parent.appendChild(month);
    month.innerText = monthName;
}

addHeading("h1", "Övning 4");

////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "Github Pages");

const publishedLink = document.createElement("a");
document.body.appendChild(publishedLink);
publishedLink.href = "https://stoffe-fe23.github.io/html-portfolio/";
publishedLink.target = "_blank";
publishedLink.innerText = "Sida publicerad på Github Pages";

////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "for ... of loop");

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

////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "while loop");

const instruction = document.createElement("p");
instruction.innerText = "(Se konsollen för resultat)";
document.body.appendChild(instruction);

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

////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "switch");

const currentMonth = "Juni";

const startInfo = document.createElement("p");
document.body.appendChild(startInfo);
startInfo.innerText = `Startmånad: ${currentMonth}`;
startInfo.style.fontWeight = "bold";

const monthList = document.createElement("ul");
monthList.classList.add("monthlist");
document.body.appendChild(monthList);

switch (currentMonth) {
    case "Januari": addMonth("Januari", monthList);
    case "Februari": addMonth("Februari", monthList);
    case "Mars": addMonth("Mars", monthList);
    case "April": addMonth("April", monthList);
    case "Maj": addMonth("Maj", monthList);
    case "Juni": addMonth("Juni", monthList);
    case "Juli": addMonth("Juli", monthList);
    case "Augusti": addMonth("Augusti", monthList);
    case "September": addMonth("September", monthList);
    case "Oktober": addMonth("Oktober", monthList);
    case "November": addMonth("November", monthList);
    case "December": addMonth("December", monthList);
}


const bgColor = "lightsalmon";

const coloredHeading = document.createElement("h3");
document.body.appendChild(coloredHeading);
coloredHeading.innerText = bgColor;
coloredHeading.style.padding = "2rem";

switch (bgColor) {
    case "lightseagreen":   useColor = "rgb(32,178,170)"; break;
    case "lightsalmon":     useColor = "rgb(255,160,122)"; break;
    case "paleturquoise":   useColor = "rgb(175,238,238)"; break;
    case "moccasin":        useColor = "rgb(255,228,181)"; break;
    default:                useColor = "rgb(211,211,211)"; break;
}

coloredHeading.style.backgroundColor = useColor;


////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "Ternary");

const numberOfChoice = 12;

const numberHeading = document.createElement("h3");
document.body.appendChild(numberHeading);
numberHeading.innerText = (numberOfChoice > 50 ? "Högt nummer: " : "Lågt nummer: ") + numberOfChoice;

// DARK MODE
let darkMode = true;

const darkToggle = document.createElement("input");
document.body.appendChild(darkToggle);
darkToggle.type = "checkbox";
darkToggle.name = "dark-toggle";
darkToggle.id = "dark-toggle";
darkToggle.checked = darkMode;

const darkBox = document.createElement("div");
darkBox.id = "darklightbox";
document.body.appendChild(darkBox);
darkBox.classList.add(darkMode ? "darkbox" : "lightbox");

darkBoxContent = document.createElement("p");
darkBox.appendChild(darkBoxContent);
darkBoxContent.innerText = darkMode ? "Dark Mode!" : "Light Mode!";

darkToggle.addEventListener("change", (e) => {
    darkMode = e.target.checked;
    darkBox.classList.toggle("darkbox");
    darkBox.classList.toggle("lightbox");
    darkBoxContent.innerText = darkMode ? "Dark Mode!" : "Light Mode!";
});