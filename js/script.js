const speakers = [
  {
    name: 'Yohai Benkler',
    title: 'Professor at Harvard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia. (Main books: The Wealth of the Network , Penguins and Leviathan )',
    image: 'speaker_01.png',
  },
  {
    name: 'Yohai Benkler',
    title: 'Professor at Harvard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia. (Main books: The Wealth of the Network , Penguins and Leviathan )',
    image: 'speaker_02.png',
  },
  {
    name: 'Yohai Benkler',
    title: 'Professor at Harvard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia. (Main books: The Wealth of the Network , Penguins and Leviathan )',
    image: 'speaker_03.png',
  },
  {
    name: 'Yohai Benkler',
    title: 'Professor at Harvard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia. (Main books: The Wealth of the Network , Penguins and Leviathan )',
    image: 'speaker_04.png',
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
  speakersContainer.appendChild(article);
});