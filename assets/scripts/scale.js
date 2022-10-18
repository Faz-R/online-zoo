const scaleOfLabel = document.getElementsByClassName('price-label');
const scaleOfPrice = document.getElementsByClassName('price-input');
const scale = document.querySelector('.donate-scale');
const donateSum = document.querySelector('.donate-sum');
const priceArray = Array.from(scaleOfPrice);

donateSum.addEventListener('input', () =>{
    if(donateSum.value.length > 4) donateSum.value = donateSum.value.slice (0,4);
})

scale.addEventListener('change', e =>{
    priceArray.forEach(el => {
        el.classList.remove('active-check');
        document.querySelector(`[for="${el.id}"]`).classList.remove('active-label');
    });
    e.target.classList.add('active-check');
    document.querySelector(`[for="${e.target.id}"]`).classList.add('active-label');
    donateSum.value = e.target.value;
})

donateSum.addEventListener('input', e =>{
    priceArray.forEach(el => {
        el.classList.remove('active-check');
        document.querySelector(`[for="${el.id}"]`).classList.remove('active-label');
    });
    priceArray.forEach(elem => {
        if(elem.value == e.target.value){
            elem.classList.add('active-check');
            document.querySelector(`[for="${elem.id}"]`).classList.add('active-label');
        }
    }
    );
 
})