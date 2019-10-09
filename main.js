const pets = [
  {
      image: 'baby-siberian-husky.jpg',
      name: 'Sophia',
      color: 'Grey Snow Pallete',
      specialSkill: '3am Singing & emotional support.',
      type: 'Dog'
  },
  {
      image: 'baby-black-cat.jpg',
      name: 'Naomi',
      color: 'Midnight Black',
      specialSkill: 'Stealing your food without you noticing.',
      type: 'Cat'
  },
  {
      image: 'baby-chinchilla.jpg',
      name: 'Andy',
      color: 'Grey Fluffiness',
      specialSkill: 'Waits indefinitely',
      type: 'Dino'
  },
  {
      image: 'cute-baby-cat.jpg',
      name: 'Melody',
      color: 'Gray & white',
      specialSkill: "Spreading cuteness-overload",
      type: 'Cat'
  },
  {
      image: 'baby-turtle.jpg',
      name: 'Ducky',
      color: 'Brownish with more brown',
      specialSkill: 'Eats tree stars, yep yep!',
      type: 'Dino'
  },
  {
      image: 'baby-snake.jpg',
      name: 'Jim',
      color: 'Coach Bag',
      specialSkill: 'Smashing skulls',
      type: 'Dino'
  },
]

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
}

const petBuilder = (petArray) => {
  let domString = '';
  for (let i = 0; i < petArray.length; i++) {
      const petCard = petArray[i];
      domString += `
      <div class="card">
          <h2>${petCard.name}</h2>
          <img src="${petCard.image}" alt="Image of ${petCard.name}" />
          <p>Color: ${petCard.color}</p>
          <p>Special Skill: ${petCard.specialSkill}</p>
          <p>Type: ${petCard.type}</p>
      </div>
      `;

  }
  printToDom(domString, 'petZone');
}


const buttonClick = (e) => {
  const type = e.target.id;
  const selectedPets = []; 
      for (let i = 0; i < pets.length; i++) {
          const newPets = pets[i];
          if (newPets.type === type) {
              selectedPets.push(newPets);
          }
      }

      if (type === 'All') {
          petBuilder(pets);
      } else {
          petBuilder(selectedPets);
      }
  }   


document.getElementById('Cat').addEventListener('click', buttonClick);
document.getElementById('Dog').addEventListener('click', buttonClick);
document.getElementById('Dino').addEventListener('click', buttonClick);
document.getElementById('All').addEventListener('click', buttonClick);

petBuilder(pets);