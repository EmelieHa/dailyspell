const urlToFetch = 'https://harry-potter-api-en.onrender.com/spells/';
const urlToFetchTwo = 'https://harry-potter-api-en.onrender.com/characters/';

let div = document.getElementById('spells');
let spellName = document.getElementById('spellName');
let spellUse = document.getElementById('spellUse')
let divTwo = document.getElementById('characters');
let charName = document.getElementById('charsName');
let charNick = document.getElementById('charsNick');


function getSpell() {
    const endPoint = Math.floor(Math.random() * 72 + 1);
const resultUrl = urlToFetch + endPoint;
fetch(resultUrl)
.then((response) => response.json())
.then((data) => {
    spellName.textContent = data.spell;
    spellUse.textContent = data.use;
  
})
};


function getChar() {
fetch(urlToFetchTwo)
const endPoint = Math.floor(Math.random() * 23 + 1);
const resultUrl = urlToFetchTwo + endPoint;
fetch(resultUrl)
.then((response) => response.json())
.then((data) => {
 charName.textContent = `Good morning! My name is ${data.character}, but you can call
 me ${data.nickname}. I belong to ${data.hogwartsHouse}.\n Try one of my spells!`;

})
}

