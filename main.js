console.log(window);
console.log(document.querySelector('.wat'));
const buttons = document.querySelectorAll('.button');
const playersContainer = document.querySelector('.playersArea');

//Création div pour héros
const heroContainer = document.createElement('div');
heroContainer.classList.add('heroContainer');
playersContainer.appendChild(heroContainer);

//Création div pour monstres
const monsterContainer = document.createElement('div');
monsterContainer.classList.add('monsterContainer');
playersContainer.appendChild(monsterContainer); 

buttons.forEach(function(button) {
    button.addEventListener('click', function(event){
    const clickedBtn = event.target;

    const playerElement = document.createElement('div');
    playerElement.classList.add('entitiesInfosContainer', 'player');

    const playerName = document.createElement('h2');
    playerElement.appendChild(playerName);

    if(clickedBtn.classList.contains('hero')){

        //Attribution div correspondante
        heroContainer.appendChild(playerElement);

        //Attribution du nom
        const name = prompt('Attribue un nom au héros');
        playerName.innerHTML = name;

        //Atribution du gif
        const img = document.createElement('img');
        img.src = './assets/images/gif/hero.gif';
        img.alt = 'hero gif';
        playerElement.appendChild(img);

    } else if(clickedBtn.classList.contains('monster')){

        //Attribution div correspondante
        monsterContainer.appendChild(playerElement);

        //Attribution du nom
        const name = prompt('Attribue un nom au monstre');
        playerName.innerHTML = name;

        //Atribution du gif
        const img = document.createElement('img');
        img.src = './assets/images/gif/monster.gif';
        img.alt = 'monster gif';
        playerElement.appendChild(img);
    }

    })
})
