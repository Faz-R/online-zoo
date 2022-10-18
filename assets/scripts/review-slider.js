const reviewCarousel = document.querySelector('.slider-carousel');
let review = document.getElementById('review-ex');

let columnWidtn = window.getComputedStyle(slider).columnGap.slice(0,-2);

function rangeValue(){
  let newValue = reviewCarousel.value;
  console.log(review.offsetWidth);
  console.log(- newValue * (review.offsetWidth + +columnWidtn))
  console.log(columnWidtn)
  slider.style.transform = `translateX(${- newValue * (review.offsetWidth + +columnWidtn)}px)`;
}

reviewCarousel.addEventListener("input", rangeValue);