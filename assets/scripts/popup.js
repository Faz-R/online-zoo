const slider = document.querySelector('.review-slider');
const popup = document.querySelector('.review-popup');
const popupBg = document.querySelector('.review-popup');


slider.addEventListener('click', e =>{
    if((window.screen.width <= 800) && (e.target.closest('.pink-border'))){
        popup.classList.add('show');
        showReview(e.target.closest('.review'));
    }
})

popupBg.addEventListener('click', (e)=>{
    if(!e.target.closest('.review')){
        popup.classList.remove('show');
    }

})

function showReview(elem){
    document.querySelector('.review-popup .author-name').textContent = elem.querySelector('.author-name').textContent;
    document.querySelector('.review-popup .author-location').textContent = elem.querySelector('.author-location').textContent;
    document.querySelector('.review-popup .author-photo').innerHTML = elem.querySelector('.author-photo').innerHTML;
    document.querySelector('.review-popup .review-text').innerHTML = elem.querySelector('.review-text').innerHTML;
}