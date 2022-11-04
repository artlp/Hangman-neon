let section, letter, button, holder, word, wordArr, hiddenWord;
let playerLives = 5;

const vocabulary = ["ANIMAL", "ANNOTATION", "PANTHER", "LAPTOP", "VEHICLE", "CONCERT", "HEALTH", "PILLOW", "ELECTRICITY", "FUNERAL", "WALLPAPER", "BARNACLE", "SUNLIGHT", "NEWSPAPER", "TENDERLOIN", "MASQUERADE", "CHRONICLES", "FUTURE", "SECRET", "STATEMENT", "LAUGHTER", "OPENMINDNESS", "FATHER", "RESURRECTION", "POLICE", "ANIMAL", "COMPROMISE", "ROMANCE", "RUBBER", "INSECT", "MOVIE"];
const lives = document.querySelectorAll('.life');
const wordDisplay2 = document.querySelector('.worddisplay2');
const lifeCount = document.getElementById("lifecount");
const gameOver = document.querySelector('#gameover');
const btnStart = document.querySelectorAll('.newgame');
const answer = document.querySelector('#answer');

lifeCount.innerText = playerLives;

btnStart.forEach((e) => {
    e.addEventListener("click", () => {
        newGame();
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
    word = vocabulary[Math.floor(Math.random() * (vocabulary.length + 1))];
    wordArr = word.split('');
    hiddenWord = wordArr.map(() => {
    return `<span class="letterBox"> &#10005; </span>`})
    wordDisplay2.innerHTML = hiddenWord.join('');
    console.log(word);
}

getNewWord();
let correctLetters = [];
function showLetter(letter, x) {
    if (wordArr.includes(letter)) {
        wordArr.forEach((e, i, arr) => {
            if (e === letter) {
                x.target.classList.add("correct");
                hiddenWord[i] = `<span class="letterBox guessed"> ${letter} </span>`;
                correctLetters[i] = `${letter}`
                if (correctLetters.join() === wordArr.join()) {
                    document.querySelector(".winwrapper").classList.remove("hidden");
                    document.querySelector(".win").innerHTML = `YOU WON! <br> The word was <br><span class="correct">${word}</span>`;

                } 
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
        document.querySelector(".wrapper").classList.remove("hidden");
        answer.innerHTML = `YOU LOST! <br> The word was <br><span class="wrong">${word}</span>`;
    },400)
}
}

function newGame() {
    document.querySelector(".wrapper").classList.add("hidden");
    document.querySelector(".winwrapper").classList.add("hidden");
    playerLives = 5;
    getNewWord();
    lifeCount.innerText = playerLives;
    for (const el of lives) {
        el.classList.remove("lostlife"); 
    }
    document.querySelectorAll(".letterbtn").forEach((e) => {
        e.classList.remove("correct");
        e.classList.remove("wrong");
    })
}