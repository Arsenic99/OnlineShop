//Количество товаров в корзине

itemsInCard();
function itemsInCard(){
let itemsInCard = JSON.parse(localStorage.getItem("card"));
const item__number = document.querySelector('.item__number');
const card__status = document.querySelector('.card__status');
if (itemsInCard.length > 0) {
    item__number.innerHTML = itemsInCard.length;
    card__status.style.display = "inline-block";
}
else
{
    card__status.style.display = "none";
}
}

//Ссылка на аккаунт

const navigation__account = document.querySelector('.navigation__account');

navigation__account.addEventListener(("click"),()=>{
    window.location.href = "http://127.0.0.1:5500/pages/auth.html";
})