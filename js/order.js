//Показывает/скрывает поле для ввода карты
const card__info = document.querySelector('.card__info');
const by__card = document.querySelector('#by__card');
const by__cash = document.querySelector('#by__cash');

by__card.addEventListener(("click"),()=>{
    if(by__card.checked){
        card__info.style.transition = "all 1s";
        card__info.style.height = "240px";
    }
})
by__cash.addEventListener(("click"),()=>{
    if(by__cash.checked){
        card__info.style.transition = "all 1s";
        card__info.style.height = "0px";
    }
})

