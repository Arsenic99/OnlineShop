//Изменить пароль
const account__password = document.querySelector('.account__password');
const hide__password = Array.from(document.querySelectorAll('.hide__password'));
const same__password = document.querySelector('.same__password');
const account__info = document.querySelector('.account__info');

if (account__password){
    account__password.addEventListener(("click"),()=>{
        if(account__password.innerText === "Изменить"){
            account__password.innerText = "Отменить";
            hide__password[2].value = "";
            hide__password[3].value = "";
            hide__password[1].style.marginBottom = "20px";
            hide__password[3].style.marginBottom = "20px";
        }
        else
        {
            account__password.innerText = "Изменить";
            same__password.style.display = "none";
        }
        hide__password.map((item)=>{
            item.classList.toggle("show__password");
        })
    })
}

//Проверка на одиннаковость пароля
function samePass(){
    if (hide__password[2].value === hide__password[3].value){
        same__password.style.display = "block";
    }
    else
    {
        same__password.style.display = "none";
    }
}
