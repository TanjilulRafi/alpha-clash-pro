function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.remove('hidden');
}