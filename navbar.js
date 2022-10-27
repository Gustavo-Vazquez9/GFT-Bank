// Peticiones api

fetch("https://api-bank-gft-trainees-mx.herokuapp.com/api/accounts",{
    method:'get',
    headers:{
        'Content-Type':'application/json',
        'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWU2OWQ2ZGIwOGI2MDAxNjBjNmFkNSIsImVtYWlsIjoib3NjYXIub3J0aXozQGdmdC5jb20iLCJmaXJzdG5hbWUiOiJPc2NhcjIiLCJsYXN0bmFtZSI6Ik9ydGl6MiIsImlhdCI6MTY2NjgyNTc0OSwiZXhwIjoxNjY4MTIxNzQ5fQ.A2zzDaiPDK5LD6Npwt1mh38mkLaRFe-Wk5hTtb_XKRA'
    }
})
.then(res=>res.json())
.then(json=>console.log(json));





fetch("https://api-bank-gft-trainees-mx.herokuapp.com/api/catalogs/cards",{
    method:'get',
    headers:{
        'Content-Type':'application/json',
        'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWU2OWQ2ZGIwOGI2MDAxNjBjNmFkNSIsImVtYWlsIjoib3NjYXIub3J0aXozQGdmdC5jb20iLCJmaXJzdG5hbWUiOiJPc2NhcjIiLCJsYXN0bmFtZSI6Ik9ydGl6MiIsImlhdCI6MTY2NjgyNTc0OSwiZXhwIjoxNjY4MTIxNzQ5fQ.A2zzDaiPDK5LD6Npwt1mh38mkLaRFe-Wk5hTtb_XKRA'
    }
})
.then(res=>res.json())
.then(json=>console.log(json));











// navmenu

const menu = document.querySelector(".header__bar--open");

const header1 = document.querySelector(".header__nav");
const header2 = document.querySelector(".header__bar--close");


menu.addEventListener('click', () => {
    header1.classList.toggle("open")
    header2.classList.toggle("open")
})

window.addEventListener('click', e => {
    /* e.target cuando se da click fuera del nav, cuando se da click al icono */
    if (header1.classList.contains('open') && e.target != header1 && e.target != menu) {
        header1.classList.toggle("open")
        header2.classList.toggle("open")
    }
})








// tarjetas

const tarjetaNegro = document.getElementById('black');
const tarjetaOro = document.getElementById('oro');
const tarjetaAzul = document.getElementById('premium');

function mostrar(event) {
    let id = event.srcElement.attributes[1].nodeValue;
    let elementoSeleccionado = document.getElementById(id);
    switch (id) {
        case 'premium':
        elementoSeleccionado.style.zIndex='3';
        tarjetaNegro.style.zIndex='2';
        tarjetaOro.style.zIndex='1';
        console.log('p');
        break;
        case 'oro':
        elementoSeleccionado.style.zIndex='3';
        tarjetaNegro.style.zIndex='2';
        tarjetaAzul.style.zIndex='1';
        console.log('o');
        break;
        case 'black':
        elementoSeleccionado.style.zIndex='3';
        tarjetaOro.style.zIndex='2';
        tarjetaAzul.style.zIndex='1';
        console.log('b');
        break;
    }

}


