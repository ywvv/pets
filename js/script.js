function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

const pets = {
  Jennifer: {
    "name": "Jennifer",
    "img": "./img/pets-jennifer.jpg",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  Sophia: {
    "name": "Sophia",
    "img": "./img/pets-sophia.jpg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  Woody: {
    "name": "Woody",
    "img": "./img/pets-woody.jpg",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  Scarlett: {
    "name": "Scarlett",
    "img": "./img/pets-scarlett.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  Katrine: {
    "name": "Katrine",
    "img": "./img/pets-katrine.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  Timmy: {
    "name": "Timmy",
    "img": "./img/pets-timmy.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  Freddie: {
    "name": "Freddie",
    "img": "./img/pets-freddie.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  Charly: {
    "name": "Charly",
    "img": "./img/pets-charly.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
};

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const menuItem = document.querySelectorAll('.header__link');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
let isShowMenu = false;

const toggleMenu = () => {
  if (!isShowMenu) {
    showMenu();
    isShowMenu = true;
  } else {
    hideMenu();
    isShowMenu = false;
  }
};

function showMenu() {
  overlay.addEventListener('click', toggleMenu);
  burger.classList.add('header__burger--open');
  menu.classList.add('header__nav--open');
  burger.style.position = 'fixed';
  overlay.style.opacity = '1';
  overlay.style.visibility = 'visible';
  body.style.overflow = 'hidden';
}

function hideMenu() {
  overlay.removeEventListener('click', toggleMenu);
  burger.classList.remove('header__burger--open');
  menu.classList.remove('header__nav--open');
  burger.style.position = 'absolute';
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
  body.style.overflow = 'visible';
}

burger.addEventListener('click', toggleMenu);
menuItem.forEach(el => el.addEventListener('click', () => {
 if (isShowMenu) {
  toggleMenu();
 }
}));

const slider = document.querySelector('.our-friends__slider');
const sliderCards = document.querySelectorAll('.our-friends__card');
const sliderBtnPrev = document.querySelector('.our-friends__slider-btn--left');
const sliderBtnNext = document.querySelector('.our-friends__slider-btn--right');
const slides = document.querySelectorAll('.our-friends__slide');
const slideMain = document.querySelector('.our-friends__slide--main');
const slidePrev = document.querySelector('.our-friends__slide--prev');
const slideNext = document.querySelector('.our-friends__slide--next');
let cardsInPage = window.innerWidth >= 1280 ? 3 : window.innerWidth >= 768 ? 2 : 1;
const popup = document.querySelector('.popup');
const popupImg = popup.querySelector('.popup__img');
const popupTitle = popup.querySelector('.popup__title');
const popupSubtitle = popup.querySelector('.popup__subtitle');
const popupText = popup.querySelector('.popup__text');
const popupListItems = popup.querySelectorAll('.popup__item-span');
const petsJson = [
  {
    "name": "Jennifer",
    "img": "../img/pets-jennifer.jpg",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../img/pets-sophia.jpg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../img/pets-woody.jpg",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../img/pets-scarlett.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../img/pets-katrine.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../img/pets-timmy.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../img/pets-freddie.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../img/pets-charly.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];
let randomNumbers = [];
let randomNumbersPrev =[];
let randomNumbersNext =[];
let randomNum;
function getRandomNum(num) {
  return Math.floor(Math.random() * num);
}

while (randomNumbers.length !== cardsInPage) {
  randomNum = getRandomNum(petsJson.length);
  if (!randomNumbers.includes(randomNum)) {
    randomNumbers.push(randomNum);
  }
}

while (randomNumbersPrev.length !== cardsInPage) {
  randomNum = getRandomNum(petsJson.length);
  if (randomNumbers[0] !== randomNum && randomNumbers[1] !== randomNum && randomNumbers[2] !== randomNum && !randomNumbersPrev.includes(randomNum)) {
    randomNumbersPrev.push(randomNum);
  }
}

while (randomNumbersNext.length !== cardsInPage) {
  randomNum = getRandomNum(petsJson.length);
  if (randomNumbers[0] !== randomNum && randomNumbers[1] !== randomNum && randomNumbers[2] !== randomNum && !randomNumbersNext.includes(randomNum)) {
    randomNumbersNext.push(randomNum);
  }
}

function createCards() {
  for (let i = 0; i < randomNumbers.length; i++) {
    let newCardMain = `<div class="our-friends__card" data-pet="${petsJson[randomNumbers[i]].name}">
    <img class="our-friends__card-img" src="img/pets-${(petsJson[randomNumbers[i]].name).toLowerCase()}.jpg" alt="Pet">
    <h4 class="our-friends__card-title">${petsJson[randomNumbers[i]].name}</h4>
    <a class="our-friends__card-link btn" href="##">Learn more</a>
    </div>`;
    let newCardPrev = `<div class="our-friends__card" data-pet="${petsJson[randomNumbersPrev[i]].name}">
    <img class="our-friends__card-img" src="img/pets-${(petsJson[randomNumbersPrev[i]].name).toLowerCase()}.jpg" alt="Pet">
    <h4 class="our-friends__card-title">${petsJson[randomNumbersPrev[i]].name}</h4>
    <a class="our-friends__card-link btn" href="##">Learn more</a>
    </div>`;
    let newCardNext = `<div class="our-friends__card" data-pet="${petsJson[randomNumbersNext[i]].name}">
    <img class="our-friends__card-img" src="img/pets-${(petsJson[randomNumbersNext[i]].name).toLowerCase()}.jpg" alt="Pet">
    <h4 class="our-friends__card-title">${petsJson[randomNumbersNext[i]].name}</h4>
    <a class="our-friends__card-link btn" href="##">Learn more</a>
    </div>`;
    slideMain.innerHTML += newCardMain;
    slidePrev.innerHTML += newCardPrev;
    slideNext.innerHTML += newCardNext;
  }
  const cards = document.querySelectorAll('.our-friends__card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      let pet = card.dataset.pet;
      popupImg.style.backgroundImage = `url(${pets[pet].img})`;
      popupTitle.textContent = pets[pet].name;
      popupSubtitle.textContent = pets[pet].type+' - '+pets[pet].breed;
      popupText.textContent = pets[pet].description;
      popupListItems[0].textContent = ' '+pets[pet].age;
      popupListItems[1].textContent = ' '+pets[pet].inoculations.join(', ');
      popupListItems[2].textContent = ' '+pets[pet].diseases;
      popupListItems[3].textContent = ' '+pets[pet].parasites;
      showPopup();
    });
  });
}
createCards();

function showNextSlide() {
  const slideMain = document.querySelector('.our-friends__slide--main');
  const slidePrev = document.querySelector('.our-friends__slide--prev');
  const slideNext = document.querySelector('.our-friends__slide--next');
  slideMain.style.left = '-100%';
  slideNext.style.left = '0';
  slidePrev.style.left = '-200%';
  setTimeout(() => {
    slideMain.remove();
    slidePrev.remove();
  }, 1000);
  slideNext.classList.add('our-friends__slide--main');
  slideNext.classList.remove('our-friends__slide--next');
  randomNumbers = randomNumbersNext;
  setTimeout(createNewCards, 1000);
  sliderBtnNext.removeEventListener('click', showNextSlide);
  sliderBtnPrev.removeEventListener('click', showPrevSlide);
  setTimeout(addEventButtons(), 1000);
}

function showPrevSlide() {
  const slideMain = document.querySelector('.our-friends__slide--main');
  const slidePrev = document.querySelector('.our-friends__slide--prev');
  const slideNext = document.querySelector('.our-friends__slide--next');
  slideMain.style.left = '100%';
  slideNext.style.left = '200%';
  slidePrev.style.left = '0%';
  setTimeout(() => {
    slideMain.remove();
    slideNext.remove();
  }, 1000);
  slidePrev.classList.add('our-friends__slide--main');
  slidePrev.classList.remove('our-friends__slide--prev');
  randomNumbers = randomNumbersPrev;
  setTimeout(createNewCards, 1000);
  sliderBtnNext.removeEventListener('click', showNextSlide);
  sliderBtnPrev.removeEventListener('click', showPrevSlide);
  setTimeout(addEventButtons(), 1000);
}

function addEventButtons() {
  sliderBtnNext.addEventListener('click', showNextSlide);
  sliderBtnPrev.addEventListener('click', showPrevSlide);
}

function removeCards() {
  slideMain.remove();
}

function createNewCards() {
  const slidePrev = document.createElement('div');
  slidePrev.className = 'our-friends__slide our-friends__slide--prev';
  slider.append(slidePrev);
  const slideNext = document.createElement('div');
  slideNext.className = 'our-friends__slide our-friends__slide--next';
  slider.append(slideNext);
  randomNumbersPrev =[];
  randomNumbersNext = [];
  while (randomNumbersPrev.length !== cardsInPage) {
    randomNum = getRandomNum(petsJson.length);
    if (randomNumbers[0] !== randomNum && randomNumbers[1] !== randomNum && randomNumbers[2] !== randomNum && !randomNumbersPrev.includes(randomNum)) {
      randomNumbersPrev.push(randomNum);
    }
  }

  while (randomNumbersNext.length !== cardsInPage) {
    randomNum = getRandomNum(petsJson.length);
    if (randomNumbers[0] !== randomNum && randomNumbers[1] !== randomNum && randomNumbers[2] !== randomNum && !randomNumbersNext.includes(randomNum)) {
      randomNumbersNext.push(randomNum);
    }
  }
  for (let i = 0; i < randomNumbers.length; i++) {
    let newCardPrev = `<div class="our-friends__card" data-pet="${petsJson[randomNumbersPrev[i]].name}">
    <img class="our-friends__card-img" src="img/pets-${(petsJson[randomNumbersPrev[i]].name).toLowerCase()}.jpg" alt="Pet">
    <h4 class="our-friends__card-title">${petsJson[randomNumbersPrev[i]].name}</h4>
    <a class="our-friends__card-link btn" href="##">Learn more</a>
    </div>`;
    let newCardNext = `<div class="our-friends__card" data-pet="${petsJson[randomNumbersNext[i]].name}">
    <img class="our-friends__card-img" src="img/pets-${(petsJson[randomNumbersNext[i]].name).toLowerCase()}.jpg" alt="Pet">
    <h4 class="our-friends__card-title">${petsJson[randomNumbersNext[i]].name}</h4>
    <a class="our-friends__card-link btn" href="##">Learn more</a>
    </div>`;
    slidePrev.innerHTML += newCardPrev;
    slideNext.innerHTML += newCardNext;
  }
  const cards = document.querySelectorAll('.our-friends__card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      let pet = card.dataset.pet;
      popupImg.style.backgroundImage = `url(${pets[pet].img})`;
      popupTitle.textContent = pets[pet].name;
      popupSubtitle.textContent = pets[pet].type+' - '+pets[pet].breed;
      popupText.textContent = pets[pet].description;
      popupListItems[0].textContent = ' '+pets[pet].age;
      popupListItems[1].textContent = ' '+pets[pet].inoculations.join(', ');
      popupListItems[2].textContent = ' '+pets[pet].diseases;
      popupListItems[3].textContent = ' '+pets[pet].parasites;
      showPopup();
    });
  });
}

sliderBtnNext.addEventListener('click', showNextSlide);
sliderBtnPrev.addEventListener('click', showPrevSlide);

const popupBtn = document.querySelector('.popup__btn');

function showPopup() {
  overlay.addEventListener('click', hidePopup);
  popup.style.visibility = 'visible';
  popup.style.opacity = '1';
  overlay.style.opacity = '1';
  overlay.style.visibility = 'visible';
  body.style.overflow = 'hidden';
}

function hidePopup() {
  overlay.addEventListener('click', hidePopup);
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
  body.style.overflow = 'visible';
}

popupBtn.addEventListener('click', hidePopup);

overlay.onmouseover = () => popupBtn.classList.add('popup__btn--active');
overlay.onmouseout = () => popupBtn.classList.remove('popup__btn--active');