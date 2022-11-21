//Открытие/закрытие формы регистрации
const register__button = document.querySelector('.register__button');
const auth__button = document.querySelector('.auth__button');
const auth = document.querySelector('.auth');
const registration = document.querySelector('.registration');

register__button.addEventListener(("click"),()=>{
    auth.classList.add("auth__deactive");
    registration.classList.add("registration__active");
})
auth__button.addEventListener(("click"),()=>{
    auth.classList.remove("auth__deactive");
    registration.classList.remove("registration__active");
})

//Показать/скрыть пароль
const show__password_auth = document.querySelector('.show__password-auth');
const show__password_register = document.querySelector('.show__password-register');
const hide__password_auth = document.querySelector('.hide__password-auth');
const hide__password_register = document.querySelector('.hide__password-register');
const auth__password = document.querySelector('.auth__password');
const register__password = document.querySelector('.register__password');
const register__password_repeat = document.querySelector('.register__password-repeat');
const different__password = document.querySelector('.different__password');

show__password_auth.addEventListener(("click"),()=>{
    show__password_auth.classList.remove("show__password-active");
    hide__password_auth.classList.add("show__password-active");
    auth__password.type = "text";
})
hide__password_auth.addEventListener(("click"),()=>{
    show__password_auth.classList.add("show__password-active");
    hide__password_auth.classList.remove("show__password-active");
    auth__password.type = "password";
})
show__password_register.addEventListener(("click"),()=>{
    show__password_register.classList.remove("show__password-active");
    hide__password_register.classList.add("show__password-active");
    register__password.type = "text";
    register__password_repeat.style.display = "none";
    different__password.style.display = "none";
})
hide__password_register.addEventListener(("click"),()=>{
    show__password_register.classList.add("show__password-active");
    hide__password_register.classList.remove("show__password-active");
    register__password.type = "password";
    register__password_repeat.style.display = "block";
    checkRepeat();
})

//Проверка на одиннаковость пароля
function checkRepeat(){
    if(register__password.value.length > 0){
        if(register__password_repeat.value.length === 0){
            different__password.style.display = "none";
        }
        else
        if(register__password.value != register__password_repeat.value){
            different__password.style.display = "block";
        }
        else{
            different__password.style.display = "none";
        }
    }
}

//Вход в аккаунт
const auth__bttn = document.querySelector('.auth__bttn');
const auth__login = document.querySelector('.auth__login');

auth__bttn.addEventListener(("click"),()=>{
    //if(auth__login.value === 'admin' && auth__password.value === 'admin'){
        window.location.href = "http://127.0.0.1:5500/pages/account.html"
    //}
})
