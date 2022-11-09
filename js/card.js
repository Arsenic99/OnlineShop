//Получаем данные из локального хранилища
let storedItem = JSON.parse(localStorage.getItem("card"));
const item__order = document.querySelector('.item__order');

//Функция для выгрузки данных из корзины в HTML
function renderItem(){
    totalCost();
    totalQuantity();
    localStorage.setItem("card", JSON.stringify(storedItem));
    itemsInCard();
    const orders = document.querySelector('.orders');
    orders.innerHTML = "";
    if (storedItem.length === 0) {
        orders.innerHTML = "Ваша корзина пуста";
        orders.style.textAlign = "center";
        orders.style.fontSize = "20px";
        orders.style.marginTop = "50px";
        item__order.style.cursor = "not-allowed";
    }
    else
    {
        storedItem.map((item)=>{
            orders.innerHTML += `
            <div class="order">
                                <div class="order__img">
                                    <img src="${item.img}" alt="">
                                </div>
                                <div class="order__content">
                                    <div class="order__name">${item.name}</div>
                                    <div class="order__article">
                                        Артикул: H0522001
                                    </div>
                                    <div class="order__size">Размер: <span>${item.size}</span></div>
                                    <div class="order__color">Цвет: <span>${item.color}</span></div>
                                    <div class="order__quantity">Количество:
                                        <button class="quantity__substract" onclick="quantitySubstract(${item.id})">-</button>
                                        <span>${item.quantity}</span>
                                        <button class="quantity__add" onclick="quantityAdd(${item.id})">+</button>
                                    </div>
                                    <div class="order__cost">${item.cost}$</div>
                                    <div class="order__delete" onclick="orderDelete(${item.id})">Удалить</div>
                                </div>
                            </div>
            `
        })
    }
}

//Выгружаем данные из корзины в HTML
renderItem();

//Удаление данных из корзины
function orderDelete(id){
    storedItem = storedItem.filter(item =>item.id != id);
    renderItem();
}

//Добавляет количества товара
function quantityAdd(id){
    storedItem.map((item)=>{
        if(item.id === id){
            item.quantity++;
        }
    })
    renderItem();
}

//Уменьшаем количества товара
function quantitySubstract(id){
    storedItem.map((item)=>{
        if(item.id === id && item.quantity > 1){
            item.quantity--;
        }
    })
    renderItem();
}

//Полная сумма товара
function totalCost(){
    const total__cost = document.querySelector('.total__cost');
    let total = 0;
    storedItem.map((item)=>{
    total += (Number(item.cost)*Number(item.quantity));
})
total__cost.innerHTML = total;
}

//Полное количество
function totalQuantity(){
    const total__quantity = document.querySelector('.total__quantity');
    let total = 0;
    storedItem.map((item)=>{
    total += Number(item.quantity);
})
total__quantity.innerHTML = total;
}

//Оформление заказа
item__order.addEventListener(("click"),()=>{
    if(storedItem.length !== 0){
        window.location.href = "http://127.0.0.1:5500/pages/order.html";
    }
})