//Изменения состояния цветов
const item__color = Array.from(document.querySelectorAll('.item__color'));

//Добавляем новый класс "item__color-active"
item__color.map((item)=>{
    item.addEventListener(("click"),()=>{
        removeColor();
        item.classList.add('item__color-active');
    })
})

//Удаляем класс "item__color-active"
function removeColor(){
    item__color.map((item)=>{
        item.classList.remove('item__color-active');
})
}
////////////////////////////////////////////////////////////////////////
//Изменения состоянии размеров
const item__size = Array.from(document.querySelectorAll('.item__size'));
const item__content_button = document.querySelector('.item__content-button');
let isSizeChosen = false;

//Добавляем новый класс "item__size-active" и добавляем функцию нажатия кнопки "Добавить в корзину"
item__size.map((item)=>{
    item.addEventListener(("click"),()=>{
        removeSize();
        item.classList.add('item__size-active');
        item__content_button.classList.add('size__selected');
        isSizeChosen = true;
    })
})

//Удаляем класс "item__size-active"
function removeSize(){
    item__size.map((item)=>{
        item.classList.remove('item__size-active');
})
}

////////////////////////////////////////////////////////////////////////

//Изменения состоянии информации
const info = Array.from(document.querySelectorAll('.info'));
const content = Array.from(document.querySelectorAll('.content'));

//Добавляем новый класс "info__active"
info.map((item)=>{
    item.addEventListener(("click"),()=>{
        removeInfo();
        item.classList.add('info__active');
        content[info.indexOf(item)].classList.add('info__active');
    })
})

//Удаляем класс "info__active"
function removeInfo(){
    info.map((item)=>{
        item.classList.remove('info__active');
})
    content.map((item)=>{
        item.classList.remove('info__active');
    })
}

////////////////////////////////////////////////////////////////////////

//Загрузка товара в локальное хранилище и для загрузки в корзину
item__content_button.addEventListener(("click"), ()=>{
    if (isSizeChosen){
        const activeColor = document.querySelector('.item__color-active');
        const activeSize = document.querySelector('.item__size-active');
        const item = {
            id: Math.floor(Math.random()*1000000),
            name: item__name.innerHTML,
            cost: 10500,
            color: activeColor.innerHTML,
            size: activeSize.innerHTML,
            quantity: 1,
            img: img.src
        }
        let card = JSON.parse(localStorage.getItem("card") ?? '[]');
        let hasInCArd = false;
        card.map((item1)=>{
            if(item1.name === item.name && item1.color === item.color && item1.size === item.size){
                item1.quantity += item.quantity;
                hasInCArd = true;
            }
        })
        if(!hasInCArd){
            card.push(item);
        }
        localStorage.setItem("card", JSON.stringify(card));
        itemsInCard();
    }
})

////////////////////////////////////////////////////////////////////////

//Получаем данные из локального хранилища для замены данных(имени, стоимости и фото)
let chosenItem = JSON.parse(localStorage.getItem("chosenItem"));
const item__name = document.querySelector('.item__content-name');
const item__price = document.querySelector('.item__content-price');
const img = document.querySelector('.item__img');
const bread = document.querySelector('.bread');
const mainBread = document.querySelector('.main__bread');

item__name.innerHTML = chosenItem.name;
item__price.innerHTML = chosenItem.cost;
img.src = chosenItem.img;
bread.innerHTML = chosenItem.bread;
mainBread.innerHTML = chosenItem.mainBread;

const vote__like = document.querySelector('.vote__like');
const vote__liked = document.querySelector('.vote__liked');
const vote__dislike = document.querySelector('.vote__dislike');
const vote__disliked = document.querySelector('.vote__disliked');
const like__quantity = document.querySelector('.vote__like-quantity');
const dislike__quantity = document.querySelector('.vote__dislike-quantity');
let likeQuantity = Number(document.querySelector('.vote__like-quantity').innerHTML);
let dislikeQuantity = Number(document.querySelector('.vote__dislike-quantity').innerHTML);
let voteStatus = "none";

vote__like.addEventListener(("click"),()=>{
    vote__like.style.display = "none";
    vote__liked.style.display = "block";
    vote__dislike.style.display = "block";
    vote__disliked.style.display = "none";
    likeQuantity++;
    if(voteStatus === "dislike"){
        dislikeQuantity--;
    }
    voteStatus = "like";
    like__quantity.innerHTML = likeQuantity;
    dislike__quantity.innerHTML = dislikeQuantity;
})
vote__liked.addEventListener(("click"),()=>{
    vote__like.style.display = "block";
    vote__liked.style.display = "none";
    voteStatus = "none";
    likeQuantity--;
    like__quantity.innerHTML = likeQuantity;
})
vote__dislike.addEventListener(("click"),()=>{
    vote__dislike.style.display = "none";
    vote__disliked.style.display = "block";
    vote__like.style.display = "block";
    vote__liked.style.display = "none";
    dislikeQuantity++;
    if(voteStatus === "like"){
        likeQuantity--;
    }
    voteStatus = "dislike";
    like__quantity.innerHTML = likeQuantity;
    dislike__quantity.innerHTML = dislikeQuantity;
})
vote__disliked.addEventListener(("click"),()=>{
    vote__dislike.style.display = "block";
    vote__disliked.style.display = "none";
    voteStatus = "none";
    dislikeQuantity--;
    dislike__quantity.innerHTML = dislikeQuantity;
})
