const speakers = [
  {
    name: 'Matias Medina',
    title: 'Singer',
    description: 'Matias was born in Mendoza, he has a lot of time like singer',
    image: 'speaker_01.png',
  },
  {
    name: 'Diego Viale',
    title: 'Violinist',
    description: 'Diego is one of the founder of the band, he study the instrument with Lele Lovato, He has more than 20 years of experience with the violin',
    image: 'speaker_02.png',
  },
  {

    name: 'Daniel Sage',
    title: 'Bass',
    description: 'Daniel is from USA, but the music send to Argentina',
    image: 'speaker_03.png',
  },
  {
    name: 'Franco Aguero',
    title: 'Percussion',
    description: 'Franco is an excellent dancer, director for the Argentinian Malambo Group.',
    image: 'speaker_04.png',
  },
  {
    name: 'Maximiliano Guerrero',
    title: 'Baterist',
    description: 'Maxi is one of the most important baterist from Colombia, he was born in Bogota',
    image: 'speaker_05.png',
  },
  {
    name: 'Sebastian Maure',
    title: 'Guitarist',
    description: 'Sebastian started with another style of music, he play Jazz and Rock song in the beginning',
    image: 'speaker_06.png',
  },
  {
    name: 'Leonardo Ibacache',
    title: 'Guitarist',
    description: 'Leonardo is the youngest guy in the group, This is your first experience in a Tour',
    image: 'speaker_07.png',
  },
  {
    name: 'Guillermo Gomez',
    title: 'Manager',
    description: 'Guillermo is one of the most important manager of Argentina.',
    image: 'speaker_08.png',
  },
];
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu-close');
const menuItems = document.querySelectorAll('.menu-item');
const speakersContainer = document.querySelector('.speakers-content');
const toggleMenu = () => {
  menu.classList.toggle('display-none');
};
menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});
speakers.forEach((speaker, index) => {
  const article = document.createElement('article');
  article.id = `speaker-${index}`;
  article.classList.add('speaker-container');
  const innerHtml = `
  <img class="speaker-image" src="./images/${speaker.image}" alt="${speaker.name}">
  <div class="speaker-content">
    <h2 class="speaker-title">${speaker.name}</h2>
    <p class="speaker-subtitle">${speaker.title}</p>
    <hr class="speaker-separator">
    <p class="speaker-description">${speaker.description}</p>
  </div>
  `;
  article.innerHTML = innerHtml;
  if (speakersContainer) {
    speakersContainer.appendChild(article);
  }
});