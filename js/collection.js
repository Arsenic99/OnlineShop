const section__item = Array.from(document.querySelectorAll('.section__item'));

section__item.map((item)=>{
    item.addEventListener(("click"),()=>{
        const chosenItem = {
            name: item.children[1].innerHTML,
            cost: item.children[2].innerHTML,
            img: item.children[0].firstElementChild.src,
            bread: item.parentElement.parentElement.children[0].children[0].innerHTML,
            mainBread: item.parentElement.parentElement.parentElement.children[0].innerHTML
        }
        localStorage.setItem("chosenItem", JSON.stringify(chosenItem));
        location.href = "./item.html";
    })
})