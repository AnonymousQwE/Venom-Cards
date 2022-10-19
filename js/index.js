// ! disable buttons
const Btns = document.querySelectorAll("button");
Btns.forEach((button) => {
  button.addEventListener("click", (e) => e.preventDefault());
});

// !CONTENT SLIDER LINKS
$(document).ready(function () {
  $(".events__slider").slick({
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    pauseOnFocus: false,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

const sliderLinks = () => {
  const sliderImgs = [
    {
      sliderImg: "./images/pictures/slider/sliderLinks-1.jpg",
      imgName: "Spider-Man 3",
    },
    {
      sliderImg: "./images/pictures/slider/sliderLinks-2.webp",
      imgName: "god of symbiotes",
    },
    {
      sliderImg: "./images/pictures/slider/sliderLinks-3.webp",
      imgName: "comics",
    },
    {
      sliderImg: "./images/pictures/slider/sliderLinks-4.jpg",
      imgName: "miles moralis 2 game",
    },
    {
      sliderImg: "./images/pictures/slider/sliderLinks-5.jpg",
      imgName: "carnage",
    },
    {
      sliderImg: "./images/pictures/slider/slider-1.png",
      imgName: "simbiots",
    },
  ];

  createSliderItems(sliderImgs);
};

const createSliderItems = (sliderImgs) => {
  const sliderParent = document.querySelector(".events__slider");

  const newSliderImg = sliderImgs
    .map(({ sliderImg, imgName }) => {
      return `
        <div class="events__slider-item">
          <a href="https://marvel.fandom.com/wiki/Knull_(Earth-616)" target="_blank" >
            <img class="events__slider-img" src="${sliderImg}"  alt="${imgName}" />
          </a>
        </div>
    `;
    })
    .join("");

  sliderParent.innerHTML = newSliderImg;
};

// !CONTENT SLIDER LINKS END

// !light dark mode functions

const darkModeTrigger = () => {
  let darkMode = localStorage.getItem("darkMode");

  const darkModeToggle = document.querySelectorAll(".navbar__colorChanger");
  const colorIcon = document.querySelector(".colorChanger__img");
  const adaptiveColorIcon = document.querySelector(
    ".adaptive-navbar .colorChanger__img"
  );

  if (darkMode === "enabled") {
    enableDarkMode();
    colorIcon.src = "./images/icons/light-theme.svg";
    adaptiveColorIcon.src = "./images/icons/light-theme.svg";
  }

  darkModeToggle.forEach((button) => {
    button.addEventListener("click", () => {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
        enableDarkMode();
        colorIcon.src = "./images/icons/light-theme.svg";
        adaptiveColorIcon.src = "./images/icons/light-theme.svg";
      } else {
        disableDarkMode();
        colorIcon.src = "./images/icons/dark-theme.svg";
        adaptiveColorIcon.src = "./images/icons/dark-theme.svg";
      }
    });
  });
};

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};

// !light dark mode functions ends

// !adaptive navbar
const adaptiveNavigationFunction = () => {
  const navbarBurger = document.querySelector(".navbar__burger");
  const navbarList = document.querySelector(".adaptive-navbar__links");

  navbarBurger.addEventListener("click", () => {
    navbarList.classList.toggle("active");
    navbarBurger.classList.toggle("close");
  });
};
// !adaptive navbar ends

// !SIMBIOTS CARDS WITH MODAL
const simbiotsInfo = () => {
  const simbiotsCards = [
    {
      simbiotsImg: "./images/pictures/simbiots/venom.png",
      simbiotsName: "Venom",
      id: 1,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/сarnage.png",
      simbiotsName: "Carnage",
      id: 2,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/toxin.png",
      simbiotsName: "Toxin",
      id: 3,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/raiot.png",
      simbiotsName: "Raiot",
      id: 4,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/antiVenom.png",
      simbiotsName: "Anti Venom",
      id: 5,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/lasher.png",
      simbiotsName: "Lasher",
      id: 6,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/screem.png",
      simbiotsName: "Screem",
      id: 7,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/symbiotDragon.png",
      simbiotsName: "Symbiot Dragons",
      id: 8,
    },
  ];

  const simbiotsFullInfo = [
    {
      simbiotsImg: "./images/pictures/simbiots/venom.png",
      simbiotsName: "Venom",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 1,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/сarnage.png",
      simbiotsName: "Carnage",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 1,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/toxin.png",
      simbiotsName: "Toxin",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 3,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/raiot.png",
      simbiotsName: "Raiot",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 4,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/antiVenom.png",
      simbiotsName: "Anti Venom",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 5,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/lasher.png",
      simbiotsName: "Lasher",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 6,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/screem.png",
      simbiotsName: "Screem",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 7,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/symbiotDragon.png",
      simbiotsName: "Symbiot Dragons",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 8,
    },
  ];

  const simbiotsCardsParent = document.querySelector(".cards");
  const modalOverlay = document.querySelector(".modal__background");

  const newSimbiotsCards = simbiotsCards
    .map(({ simbiotsImg, simbiotsName, id }) => {
      return `
      <div class="card" id="${id}">
        <div class="card__img">
          <img src="${simbiotsImg}" alt="${simbiotsName}" />
        </div>
        <h3 class="card__title">${simbiotsName}</h3>
      </div>
    `;
    })
    .join("");

  simbiotsCardsParent.innerHTML = newSimbiotsCards;

  const creatSimbiotsModal = simbiotsFullInfo
    .map(({ simbiotsImg, simbiotsName, fullInfo, id }) => {
      return `
      <div class="modal" id="${id}">
          <div class="modal__img">
            <img src="${simbiotsImg}" alt="${simbiotsName}" />
          </div>
          <div class="modal__info">
            <div class="modal__header">
              <h3 class="modal__title">${simbiotsName}</h3>
              <p class="modal__close">&times;</p>
            </div>
            <p class="modal__text">${fullInfo}</p>
          </div>
        </div>
    `;
    })
    .join("");

  modalOverlay.innerHTML = creatSimbiotsModal;

  const card = simbiotsCardsParent.childNodes;

  card.forEach((item) => {
    item.addEventListener("click", () => {
      const modal = document.querySelectorAll(".modal");

      if (item.id === modal.length) {
        console.log(item.id, modal.id);
      }
    });
  });

  // newSimbiotsCards.forEach((simbiot) => {
  //   simbiot.addEventListener('click', ()=> {
  //     if(newSimbiotsCards.id === creatSimbiotsModal.id){
  //       const modal = modalOverlay.closest('.modal');
  //       modal.classList.add('active');
  //       modalOverlay.classList.add('active');
  //     }
  //   })
  // })
};

// !SIMBIOTS CARDS WITH MODAL ends

// !SCROLL TO TOP 
const scrollToTop = ()=> {
  const isShownBtn = document.querySelector('.isShown');

  window.onscroll = ()=> {
    if(window.scrollY >= 300){
      isShownBtn.classList.remove('hide')
    }else{
      isShownBtn.classList.add('hide')
    }
  }

  isShownBtn.addEventListener('click', ()=> {
    window.scrollTo(0, 0);
  });
}
scrollToTop();

// !SCROLL TO TOP END 

const functionThatTriggerAllFunctions = () => {
  darkModeTrigger();
  adaptiveNavigationFunction();
  sliderLinks();
  simbiotsInfo();
};

functionThatTriggerAllFunctions();
