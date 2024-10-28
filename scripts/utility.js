function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementid) {
    const element = document.getElementById(elementid);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);

    const alphabet = alphabets[index];
    return alphabet;

}

function addBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementid,value){
    const element = document.getElementById(elementid);
    element.innerText = value;

}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}