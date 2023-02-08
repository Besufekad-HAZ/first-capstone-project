const guests = document.querySelector('.Masters')

const guestsList = [
  {
    img: 'Versatile.jpg',
    name: 'Amanuel Worku',
    skills:
      'Music Producer/ Composer/ Arranger and songwriter/ Associate Music Professor at Harvard.',
    desc: 'Very Talented and Versatile producer. Recieved the Best Gospel Music Producer and Mix Engineer (GMA) Award in 2022.'
  },
  {
    img: 'Atsbega.jpg',
    name: 'Beabtsega Likoyu',
    skills:
      'Music Producer/ Percussionist/ Arranger and songwriter/ Bassist/ Music Director At Oakwood University.',
    desc: 'Very Talented, an elite Keyboardist and Bassist. Renowned for his tastful bass lines'
  },
  {
    img: 'Midne.jpg',
    name: 'Yidnekachew Kassahun',
    skills:
      'Music Producer/ Choir Director/ Arranger and songwriter/ Saxophonist/ Vocal and Choral Director Berklee.',
    desc: 'Recieved Singer and Artist of the year Award in GMA Awards 2020,his success and talent is very refreshing!'
  },
  {
    img: 'Bese.jpg',
    name: 'Besufekad Alemu',
    skills:
      'Music Producer/ Composer/ Arranger and songwriter/ Music Director at Sydney University.',
    desc: 'Enjoys Music and Perfecting his craft. Widely known for his choral Arrangements and Reharms!'
  },
  {
    img: 'Moni.jpg',
    name: 'Yonathan Mebrate',
    skills:
      'Business Man/ Fender,Ibanez and Nord Brand Ambassador/ Agent for HARMONIX MUSIC SYSTEMS.',
    desc: 'A natural businessperson, and brilliant business mind, Yonathan is known for his progressive attitude toward licensing songs and spotting musical talents.'
  },
  {
    img: 'Sureee.jpg',
    name: 'Surafel Lessanu',
    skills:
      'Youtube Streamer / Gamer/ Graphics Designer/ Produces Music for Games/ Visual FX Expert',
    desc: 'Known for his Problem solving mind, an Elite Gamer, Visual Effects and Graphics design expert and Produced some interesting beats and music Tracks for GTA-V: Roleplay.'
  }
]

// Dynamically inserting the Section
guests.innerHTML = ''

for (let i = 0; i < guestsList.length; i++) {
  guests.innerHTML += `  <div class="guests">
            <div>
            <img class="guest_img" src="assets/masters/${guestsList[i].img}" alt="Guests list image">
            </div>
            <div class="desc">
            <h2>${guestsList[i].name}</h2>
            <h3 class="skills">${guestsList[i].skills}</h3>
            <span class="line_guests"></span>
            <p class="info">${guestsList[i].desc}</p>
            </div>
            </div> `
}

// Hamburger Menu JS function

const Hamburger = document.querySelector('.open_btn')
const hamburgerClose = document.querySelector('.close_btn')

Hamburger.addEventListener('click', () => {
  document.querySelector('.mob-menu').style.display = 'block'
})

hamburgerClose.addEventListener('click', () => {
  document.querySelector('.mob-menu').style.display = 'none'
})
