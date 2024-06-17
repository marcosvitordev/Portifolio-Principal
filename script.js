const words = ["Olá", "Mundo", "Bem-vindo", "JavaScript", "HTML", "CSS"];
let currentIndex = 0;
let currentWord = "";
let letterIndex = 0;
const wordsContainer = document.getElementById('wordsContainer');

function addWord() {
    if (currentIndex < words.length) {
        currentWord = words[currentIndex];
        letterIndex = 0;
        addLetter();
    }
}

function addLetter() {
    if (letterIndex < currentWord.length) {
        const letter = document.createElement('span');
        letter.textContent = currentWord.charAt(letterIndex);
        wordsContainer.appendChild(letter);
        letterIndex++;
        setTimeout(addLetter, 100); // Ajuste aqui para controlar a velocidade da digitação
    } else {
        currentIndex++;
        setTimeout(removeWord, 1000); // Tempo antes de remover a palavra
    }
}

function removeWord() {
    const letters = wordsContainer.childNodes;
    if (letters.length > 0) {
        wordsContainer.removeChild(letters[0]);
        setTimeout(removeWord, 50); // Ajuste aqui para controlar a velocidade da remoção
    } else {
        addWord(); // Inicia o processo de adicionar a próxima palavra
    }
}

// Inicia o processo de adicionar palavras
addWord();