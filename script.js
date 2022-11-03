let section, letter, button, holder;
const vocabulary = ["ANIMAL", "ANNOTATION", "PANTHER", "LAPTOP", "VEHICLE", "CONCERT", "HEALTH", "PILLOW", "ELECTRICITY", "FUNERAL", "WALLPAPER", "BARNACLE", "SUNLIGHT", "NEWSPAPER", "TENDERLOIN", "MASQUERADE", "CHRONICLES", "FUTURE", "SECRET", "STATEMENT", "LAUGHTER", "OPENMINDNESS", "FATHER", "RESURRECTION", "POLICE", "ANIMAL", "COMPROMISE", "ROMANCE", "RUBBER", "INSECT"];
const lives = document.querySelectorAll('.life');
let word;
const wordDisplay2 = document.querySelector('.worddisplay2');
let playerLives = 5;
const lifeCount = document.getElementById("lifecount");
const gameOver = document.querySelector('#gameover');
const btnStart = document.querySelectorAll('.newgame');

lifeCount.innerText = playerLives;

btnStart.forEach((e) => {
    e.addEventListener("click", () => {
        getNewWord();
    })
})


window.addEventListener("load", function () {
    holder = document.getElementById("buttonsHolder");
    for (i = 65; i <= 90; i++) {
        section = document.createElement("section");
        letter = String.fromCharCode(i);
        button = document.createElement("div");
        button.classList.add("letterbtn");
        button.innerHTML = letter;
        button.setAttribute("data-letter", letter);
        button.onclick = function (x) { showLetter(this.getAttribute("data-letter"), x); };
        buttonsHolder.appendChild(button);
    }

});
function getNewWord() {
    return word = vocabulary[Math.floor(Math.random() * (vocabulary.length + 1))];
}
getNewWord();
console.log(getNewWord());

let wordArr = word.split('');
const hiddenWord = wordArr.map(() => {
    return `<span class="letterBox"> &#10005; </span>`;
});

wordDisplay2.innerHTML = hiddenWord.join('');

function showLetter(letter, x) {
    if (wordArr.includes(letter)) {
        wordArr.forEach((e, i, arr) => {
            if (e === letter) {
                x.target.classList.add("correct");
                hiddenWord[i] = `<span class="letterBox guessed"> ${letter} </span>`;
            }
        });
    } else {
        x.target.classList.add("wrong")
        playerLives--;
        lifeCount.innerText = playerLives;
        lives[playerLives].classList.add("lostlife")
        checkLives();
    }
    wordDisplay2.innerHTML = hiddenWord.join('');
}

function checkLives() {
    if (playerLives === 0) { 
        setTimeout(() => {
        gameOver.classList.remove("hidden")
    },400)
}
}