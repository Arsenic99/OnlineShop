//Количество товаров в корзине


function itemsInCard(){
let itemsInCard = JSON.parse(localStorage.getItem("card") ?? '[]');
const item__number = Array.from(document.querySelectorAll('.item__number'));
const card__status = Array.from(document.querySelectorAll('.card__status'));
if (itemsInCard.length > 0) {
    item__number.map((item)=>{
        item.innerHTML = itemsInCard.length;
    })
    
    card__status.map((item)=>{
        item.style.display = "inline-block";
    })
}
else
{
    card__status.map((item)=>{
        item.style.display = "none";
    })
}
}
itemsInCard();
//Ссылка на аккаунт

const navigation__account = Array.from(document.querySelectorAll('.navigation__account'));

navigation__account.map((item)=>{
    item.addEventListener(("click"),()=>{
        if(window.location.href === "https://arsenic99.github.io/OnlineShop/index.html" || window.location.href === "https://arsenic99.github.io/OnlineShop/"){
            window.location.href = "pages/auth.html";
        }
        else
        if(window.location.href !== "https://arsenic99.github.io/OnlineShop/pages/account/account__info.html" || window.location.href !== "https://arsenic99.github.io/OnlineShop/pages/account/history.html")
        {
            window.location.href = "./auth.html";
            console.log(1);
        }
        else
        {
            window.location.href = "../auth.html";
        }
    })
})


//Анимация бургер меню
const burger__menu_btn = document.querySelector('.burger__menu-button');
const burger__menu = document.querySelector('.side__navigation');
const body = document.querySelector('body');

burger__menu_btn.addEventListener(("click"),()=>{
    burger__menu_btn.children[0].classList.toggle("burger__firstline");
    burger__menu_btn.children[1].classList.toggle("burger__secondline");
    burger__menu_btn.children[2].classList.toggle("burger__thirdline");
    burger__menu.classList.toggle("burger__menu-active");
    event.stopPropagation();
})
body.addEventListener(("click"),()=>{
    burger__menu_btn.children[0].classList.remove("burger__firstline");
    burger__menu_btn.children[1].classList.remove("burger__secondline");
    burger__menu_btn.children[2].classList.remove("burger__thirdline");
    burger__menu.classList.remove("burger__menu-active");
})