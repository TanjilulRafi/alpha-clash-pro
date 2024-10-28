function handleKeyboard(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)

    if ( playerPressed === expectedAlphabet){
        const currentScoreElem = document.getElementById('current-score');
        const currentScoreText = currentScoreElem.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore+1;
        currentScoreElem.innerText = newScore;
        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLifeElem = document.getElementById('current-life');
        const currentLifeText = currentLifeElem.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife-1;


        currentLifeElem.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboard);

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your alphabet', alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerHTML = alphabet;
    addBgColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

