console.log('hi');
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



/* const pets = [
    {
     imageUrl: 'baby-siberian-husky.jpg',
     name: 'Sophia',
     color: 'grey',
     specialSkill: 'Singing & emotional support.',
     type: 'dog'
     },

    {
    imageUrl: 'baby-black-cat.jpg',
    name: 'Naomi',
    color: 'black',
    specialSkill: 'Stealing your food without you noticing.',
    type: 'cat',

    },
    {
    name: 'Andy',
    color: 'grey',
    specialSkill: 'Sitting on feet.',
    type: 'dog',
    imageUrl: 'baby-chinchilla.jpg',
    },
    {
        name: "Dusty",
        color: "Green",
        specialSkill: "Gives sincere apologies.",
        type: "cat",
        imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
      },
      {
        name: "Trouble",
        color: "Poop-Colored",
        specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
        type: "dino",
        imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
      },
      {
        name: "Whiskers",
        color: "Yellow",
        specialSkill: "Can prove he is a real man by drinking whiskey.",
        type: "dino",
        imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
      },
      {
        name: 'Coco',
        color: 'Black',
        specialSkill: 'Burps minimally.',
        type: 'dog',
        imageUrl: 'http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg'
      },
  ];

  const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

const petBuilder = (pets) => {
    let domString = ''
  for (let i = 0; i < pets.length; i++) {
      const pets = pets[i]
      domString += `
      <div class="card">
          <h2>${pets.name}</h2>
          <img src=${pets.imageUrl} alt='Image of ${pets.name}' />
          <h3>${pets.color}</h2>
      </div>
      `
  }
  printToDom(domString, 'pet-zone');

}

const buttonClick = (e) => {
    // figure out WHO this instructor is for the button we clicked on
    const type = e.target.id
    // only get those pies from the list of all the pies
    const selectedPets = []
    for (let i = 0; i < pets.length; i ++) {
        const pet = pets[i]
        if (pets.type === type) {
            selectedPets.push(pet)
        }
    }

    if (type === 'all') {
        petBuilder(petss);
      } else {
        petBuilder(selectedPets);
      }
    // pass small list of pies back into the pie builder
}


document.getElementById('cats').addEventListener('click', buttonClick)
document.getElementById('dogs').addEventListener('click', buttonClick)
document.getElementById('dino').addEventListener('click', buttonClick)
document.getElementById('allPets').addEventListener('click', buttonClick)

petBuilder(pets) */
