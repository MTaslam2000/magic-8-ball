/* Imports */

/* Get DOM Elements */
const submitBtn = document.getElementById('submit');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
/* State */

/* Events */

submitBtn.addEventListener('click', () => {
    toggleSections();
    const randomInt = Math.floor(Math.random() * answers.length);
    console.log(randomInt);
    const randomChoice = answers[randomInt];
    console.log(randomChoice);
    console.log('answers[12], answers[12]');
    answersP.textContent = randomChoice;
});

function toggleSections() {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
}

const answers = [
    "Yes, definitely",
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "You may rely on it",
    "As I see it, yes",
    "Most Likely",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don’t count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
