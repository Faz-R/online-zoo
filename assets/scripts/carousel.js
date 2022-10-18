import pets from "./animals.js";
const sliderPets = document.querySelector('.slider-container')
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
let moveDirection;

function getRandom(total) {
    let randomArr = []
    while (randomArr.length < total) {
        let randomNum = Math.floor(Math.random() * pets.length);
        if (randomArr.indexOf(randomNum) === -1) {
        randomArr.push(randomNum);
        }
    }
    return randomArr;
}
  
function getPetsCollection() {
    const numSlide = 6;
    const randomArr = getRandom(numSlide);
    let petsCollection = [];
    for (let i = 0; i < numSlide; i++) {
        petsCollection.push(pets[randomArr[i]])
    };
    return petsCollection;
}
  
function generatePetsSlide(slideName) {
    let petsArray = getPetsCollection();
    let slide = document.createElement('div');
    slide.classList = 'pets-slider';
    slide.classList.add(`${slideName}`);
  
    for (let i = 0; i < petsArray.length; i++) {
        slide.insertAdjacentHTML("afterbegin", `<div class="pet">
        <div class="pet-picture-block">
            <img src="${petsArray[i].src}" alt="${petsArray[i].name}" class="animal-picture">
        </div>
        <div class="pet-information">
            <div class="pet-title">
               <span class="pet-name">${petsArray[i].name}</span>
               <span class="pet-location  small">${petsArray[i].location}</span>
            </div>
            <img src="${petsArray[i].diet}" alt="food" class="food">
        </div> 
        <div class="background-information">
            <span class="background-pet-name">${petsArray[i].name}</span>
            <span class="background-pet-location small">${petsArray[i].location}</span>
        </div>       
        </div>`);
    }
    return slide;
  
}

function nextSlide() {
    moveDirection = 'next';
    sliderPets.append(generatePetsSlide('next-slide'));
    sliderPets.classList.add("slider-next");
    prevBtn.removeEventListener("click", prevSlide);
    nextBtn.removeEventListener("click", nextSlide);
  };
  
  function prevSlide() {
    moveDirection = 'prev';
    sliderPets.prepend(generatePetsSlide('prev-slide'));
    sliderPets.classList.add("slider-prev");
    prevBtn.removeEventListener("click", prevSlide);
    nextBtn.removeEventListener("click", nextSlide);
  };
  
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  
  sliderPets.addEventListener("transitionend", (e) => {
    if(e.target.classList.contains('slider-container')){
    sliderPets.classList.remove("slider-prev");
    sliderPets.classList.remove("slider-next");
    if (moveDirection === 'next') {
        document.querySelector('.current-slide').innerHTML = document.querySelector('.next-slide').innerHTML;
        document.querySelector('.next-slide').remove();
    }
    if(moveDirection === 'prev') {
        document.querySelector('.current-slide').innerHTML = document.querySelector('.prev-slide').innerHTML;
        document.querySelector('.prev-slide').remove();
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
    }
 
  })
  