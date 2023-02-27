const urlToFetch = 'https://harry-potter-api-en.onrender.com/spells/';

let div = document.getElementById('spells');
let spellName = document.querySelector('h2');
let spellUse = document.querySelector('h3');

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


