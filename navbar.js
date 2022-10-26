const menu = document.querySelector(".header__bar--open");

const header1 = document.querySelector(".header__nav");
const header2 = document.querySelector(".header__bar--close");


menu.addEventListener('click', ()=> {
    header1.classList.toggle("open")
    header2.classList.toggle("open")
})

window.addEventListener('click', e =>{
    /* e.target cuando se da click fuera del nav, cuando se da click al icono */
    if( header1.classList.contains('open') && e.target != header1 &&  e.target != menu )
    {
        header1.classList.toggle("open")
        header2.classList.toggle("open")
    }
})